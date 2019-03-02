import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-assistances',
  templateUrl: './assistances.page.html',
  styleUrls: ['./assistances.page.scss'],
})
export class AssistancesPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  public back() {
    this.navCtrl.navigateRoot('/menu/tabs/tab1');
  }

}
