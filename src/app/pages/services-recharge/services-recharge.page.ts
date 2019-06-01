import { Component, OnInit } from '@angular/core';
import { MenuController, AlertController } from '@ionic/angular';

@Component({
	selector: 'app-services-recharge',
	templateUrl: './services-recharge.page.html',
	styleUrls: [ './services-recharge.page.scss' ]
})
export class ServicesRechargePage implements OnInit {
	constructor(private menu: MenuController, private alertCtrl: AlertController) {}

	ngOnInit() {}

	ionViewWillEnter() {
		this.menu.enable(true, 'first');
	}

	async recharger(service: string) {
		const _self = this;
		const alert = await this.alertCtrl.create({
			header: 'Rechargement via ' + service,
			message: 'Veuillez entrez le numéro et le montant:',
			inputs: [
				{
					name: 'numero',
					placeholder: 'Numéro'
				},
				{
					name: 'montant',
					placeholder: 'Montant',
					type: 'number'
				}
			],
			buttons: [
				{
					text: 'Annuler',
					role: 'cancel',
					handler: (data) => {
						console.log('Cancel clicked');
					}
				},
				{
					text: 'Valider',
					handler: (data) => {
						if (data.numero !== '' && data.montant !== '') {
							// logged in!
						} else {
							// invalid login
							return false;
						}
					}
				}
			]
		});
		await alert.present();
	}
}
