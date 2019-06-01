import { MsalService } from './services/msal.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
	selector: 'app-root',
	templateUrl: 'app.component.html'
})
export class AppComponent {
	constructor(
		private router: Router,
		private platform: Platform,
		private splashScreen: SplashScreen,
		private statusBar: StatusBar,
		private msalService: MsalService,
		private navCtrl: NavController
	) {
		this.initializeApp();
	}

	initializeApp() {
		this.platform.ready().then(() => {
			this.statusBar.styleDefault();
			// Commenting splashScreen Hide, so it won't hide splashScreen before auth check
			//this.splashScreen.hide();
			const currentUser = this.msalService.isLoggedIn();
			if (currentUser) {
				// authorised
				this.msalService.getToken();
				this.navCtrl.navigateRoot('/menu/tabs/tab1');
			}
		});
	}

	// When Logout Button is pressed
	logout() {
		this.msalService.logout();
		this.navCtrl.navigateRoot('/login');
	}

	goToPage(url: string) {
		return this.router.navigateByUrl(url);
	}
}
