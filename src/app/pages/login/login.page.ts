import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';
import { MsalService } from 'src/app/services/msal.service';
import { AlertService } from 'src/app/services/alert.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.page.html',
	styleUrls: [ './login.page.scss' ]
})
export class LoginPage implements OnInit {
	isLoading = false;
	hasAuthenticate = false;
	constructor(
		private navCtrl: NavController,
		private msalService: MsalService,
		private alertService: AlertService,
		public loadingController: LoadingController
	) {}

	ngOnInit() {}

	login() {
		let _this = this;
		_this.presentLoading();
		this.msalService.loginSignup().then(function(isLogin) {
			if (isLogin === true) {
				_this.hasAuthenticate = true;
				_this.navCtrl.navigateRoot('/menu/tabs/tab1');
			} else {
				_this.dismissLoading();
				_this.alertService.presentToast('Veuillez réessayer');
			}
		});
	}

	async presentLoading() {
		this.isLoading = true;
		return await this.loadingController
			.create({
				duration: 5000
			})
			.then((a) => {
				a.present().then(() => {
					if (!this.isLoading) {
						a.dismiss();
					}
				});
			});
	}

	async dismissLoading() {
		this.isLoading = false;
		return await this.loadingController.dismiss();
	}
}
