import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Tab2Page } from '../tab2/tab2.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  constructor(public navCtrl: NavController) {
  }

  goToPage(page) {
    if(page == '/menu/tabs/tab2')
      this.navCtrl.navigateRoot('/menu/tabs/tab2');
    else if(page == '/assistances')
      this.navCtrl.navigateRoot('/assistances');
    return 0;
  }
}
