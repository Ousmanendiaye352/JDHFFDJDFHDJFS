import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';

@Component({
	selector: 'app-login',
	templateUrl: './login.page.html',
	styleUrls: [ './login.page.scss' ]
})
export class LoginPage implements OnInit {
	constructor(private navCtrl: NavController, private alertCtrl: AlertController) {}

	ngOnInit() {}

	public login() {
		this.navCtrl.navigateRoot('/menu/tabs/tab1');
	}

	async createAccount() {
		const _self = this;
		const alert = await this.alertCtrl.create({
			header: 'Vérification',
			message: 'Veuillez entrez votre numéro de carte nopalé.',
			inputs: [
				{
					name: 'numCarte',
					placeholder: 'Numéro de la carte nopalé'
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
						if (data.numCarte.length > 7) {
							// logged in!
							_self.navCtrl.navigateRoot('/register');
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
