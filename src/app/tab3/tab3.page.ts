import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Tab1Page } from '../tab1/tab1.page';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  constructor(public navCtrl: NavController) {
  }

  goToPage(page) {
    //return 0;
    this.navCtrl.navigateRoot('/tabs/tab1');
  }
}
