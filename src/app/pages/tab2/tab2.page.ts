import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
	selector: 'app-tab2',
	templateUrl: 'tab2.page.html',
	styleUrls: [ 'tab2.page.scss' ]
})
export class Tab2Page {
	constructor(private menu: MenuController, public alertController: AlertController) {}

	ngOnInit() {
		this.menu.enable(false, 'first');
	}

	async presentAlert(serv, cons, sm) {
		const alert = await this.alertController.create({
			header: serv,
			subHeader: 'Résumé',
			message:
				'<b>RÉF:</b> 974228<br>' +
				'<b>DATE:</b> 21/02/2019 15h12<br>' +
				'<b>TYPE:</b> ' +
				serv +
				'<br>' +
				'<b>ENSEIGNE:</b> ' +
				cons +
				'<br>' +
				'<b>MONTANT:</b> ' +
				sm +
				' CFA',

			buttons: [ 'OK' ]
		});

		await alert.present();
	}

	deleteOfHistory(item) {
		return 0;
	}
}
