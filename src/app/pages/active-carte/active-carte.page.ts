import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { MsalService } from 'src/app/services/msal.service';

@Component({
  selector: 'app-active-carte',
  templateUrl: './active-carte.page.html',
  styleUrls: ['./active-carte.page.scss'],
})
export class ActiveCartePage implements OnInit {
  credentials = {} as {numc:"" , numt:""};
  constructor(private navCtrl: NavController, private alertCtrl: AlertController ,private ms:MsalService) { }

  ngOnInit() {
  }

  public createAccount() {
 //   this.navCtrl.navigateRoot('/menu/tabs/tab1');
  }

  public activerCarte() {
   // this.navCtrl.navigateRoot('/login');
   let b ;
   b = {
     'userId': this.ms.getUser().userIdentifier,
     'cardNumber': this.credentials.numt,
     'phoneNumber': this.credentials.numc

   }
 
   this.ms.activer(b).subscribe(o=> {
     console.log(o)
   });

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
