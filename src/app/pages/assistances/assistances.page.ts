import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
	selector: 'app-assistances',
	templateUrl: './assistances.page.html',
	styleUrls: [ './assistances.page.scss' ]
})
export class AssistancesPage implements OnInit {
	constructor(private menu: MenuController) {}

	ionViewWillEnter() {
		this.menu.enable(true, 'first');
	}

	ngOnInit() {}
}
