import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Tab1Page } from '../tab1/tab1.page';
import { MsalService } from 'src/app/services/msal.service';

@Component({
	selector: 'app-tab3',
	templateUrl: 'tab3.page.html',
	styleUrls: [ 'tab3.page.scss' ]
})
export class Tab3Page {
	constructor(public navCtrl: NavController, private msalService: MsalService) {}

	goToPage(page) {
		if (page === 'logout') {
			this.msalService.logout();
			this.navCtrl.navigateRoot('/login');
		} else if (page === '/assistances') {
			this.navCtrl.navigateRoot(page);
		} else {
			this.navCtrl.navigateRoot('/menu/tabs/tab1');
		}
	}
}
