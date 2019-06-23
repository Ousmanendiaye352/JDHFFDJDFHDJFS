import { Injectable } from '@angular/core';

import * as Msal from 'msal';
import { NavController } from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
declare var bootbox: '';

@Injectable({
	providedIn: 'root'
})
export class MsalService {
	
	B2CTodoAccessTokenKey = 'b2c.access.token';

	tenantConfig = {
		tenant: 'nopaleb2c.onmicrosoft.com',
		clientID: 'e55dec96-1b7e-4fbd-bea5-593a2ca40677',
		signUpSignInPolicy: 'B2C_1_SignUpSignIn',
		b2cScopes: [
			'openid',
			'https://nopaleb2c.onmicrosoft.com/nopaleapi/user_impersonation',
			'https://nopaleb2c.onmicrosoft.com/nopaleapi/read_write'
		]
	};

	// Configure the authority for Azure AD B2C
	authority = 'https://login.microsoftonline.com/tfp/' +
		this.tenantConfig.tenant +
		'/' +
		this.tenantConfig.signUpSignInPolicy;

	/*
   * B2C SignIn SignUp Policy Configuration
   */
	clientApplication = new Msal.UserAgentApplication(this.tenantConfig.clientID, this.authority, function(
		errorDesc: any,
		token: any,
		_error: any,
		tokenType: any
	) {});

	constructor(private http: HttpClient, private navCtrl: NavController) {}
	public async loginSignup() {
		this.clientApplication.authority =
			'https://login.microsoftonline.com/tfp/' +
			this.tenantConfig.tenant +
			'/' +
			this.tenantConfig.signUpSignInPolicy;
		const login = await this.authenticate();

		return login;
	}

	public authenticate(): any {
		let _this = this;
		return this.clientApplication.loginPopup(this.tenantConfig.b2cScopes).then(
			function(idToken: any) {
				return _this.clientApplication.acquireTokenSilent(_this.tenantConfig.b2cScopes).then(
					function(accessToken: any) {
						_this.saveAccessTokenToCache(accessToken);
						return true;
					},
					function(error: any) {
						return _this.clientApplication.acquireTokenPopup(_this.tenantConfig.b2cScopes).then(
							function(accessToken: any) {
								_this.saveAccessTokenToCache(accessToken);
								return true;
							},
							function(error: any) {
								console.log('error: ', error);
								return false;
							}
						);
					}
				);
			},
			function(error: any) {
				console.log('error: ', error);
				return false;
			}
		);
	}

	saveAccessTokenToCache(accessToken: string): void {
		sessionStorage.setItem(this.B2CTodoAccessTokenKey, accessToken);
	}

	getToken() {
		return sessionStorage.getItem(this.B2CTodoAccessTokenKey);
	}

	logout(): void {
		sessionStorage.removeItem(this.B2CTodoAccessTokenKey);
		return this.clientApplication.logout();
	}

	isLoggedIn(): boolean {
		return this.clientApplication.getUser() != null;
	}

	getUserEmail(): string {
		return this.getUser().idToken['emails'][0];
	}

	getUser() {
		return this.clientApplication.getUser();
	}

	option() {
		let  httpOptions ;
	  httpOptions  = {
		 headers: new HttpHeaders({
		  'Content-Type': 'application/json-patch+json',
		  'Cache-Control': 'no-cache',
		  "accept": "text/plain" ,
		  'Authorization' : 'Bearer ' + this.getToken()
		 })
	   };
		  return httpOptions ;
	   }
	   activer(body) {
console.log(this.getUser())
		// tslint:disable-next-line:max-line-length
		return this.http.post<any>('https://api.nopale.net/api/card/activate', JSON.stringify(body), this.option() )
			.pipe( map(result => {
				console.log(result)
			}));
	  }
}
