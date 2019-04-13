import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { NavController, AlertController } from '@ionic/angular';
import { Tab2Page } from '../tab2/tab2.page';

@Component({
	selector: 'app-tab1',
	templateUrl: 'tab1.page.html',
	styleUrls: [ 'tab1.page.scss' ]
})
export class Tab1Page {
	constructor(private menu: MenuController, public navCtrl: NavController, private alertCtrl: AlertController) {}

	ngOnInit() {
		this.menu.enable(false, 'first');
	}

	goToPage(page) {
		let _self = this;
		switch (page) {
			case '/menu/tabs/tab2': {
				this.navCtrl.navigateRoot('/menu/tabs/tab2');
				break;
			}
			case '/assistances': {
				this.navCtrl.navigateRoot('/assistances');
				break;
			}
			case '/payer': {
				_self.presentAlert(
					'Serice paiement',
					"Désolé cette fonctionnalité n'est pas encore disponible. Nous vous remercions de votre confiance."
				);
				break;
			}
			case '/recharge': {
				this.navCtrl.navigateRoot('/services-recharge');
				break;
			}
			default: {
				//statements;
				break;
			}
		}
		if (page == '/menu/tabs/tab2') this.navCtrl.navigateRoot('/menu/tabs/tab2');
		else if (page == '/assistances') this.navCtrl.navigateRoot('/assistances');
		return 0;
	}

	async presentAlert(title, text) {
		const alert = await this.alertCtrl.create({
			header: 'Info',
			subHeader: title,
			message: text,
			buttons: [ 'OK' ]
		});
		await alert.present();
	}
}
