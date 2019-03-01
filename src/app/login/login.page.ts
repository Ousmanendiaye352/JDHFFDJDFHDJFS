import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor(private navCtrl: NavController, private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  public createAccount() {
    this.navCtrl.navigateRoot('/menu/tabs/tab1');
  }

  public login() {
    this.navCtrl.navigateRoot('/menu/tabs/tab1');
  }

}
