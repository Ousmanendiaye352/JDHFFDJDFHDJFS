import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private navCtrl: NavController, private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  public createAccount() {
    this.navCtrl.navigateRoot('/menu/tabs/tab1');
  }

  public login() {
    this.navCtrl.navigateRoot('/login');
  }

  public setType(input, icon) {
    if(input.type == 'password') {
      input.type = 'text';
      icon.name = 'eye-off';
    } else {
      input.type = 'password';
      icon.name = 'eye';
    }
  }

}
