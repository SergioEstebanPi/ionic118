import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AlertController } from 'ionic-angular';

/**
 * Generated class for the InfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {

	lugar:any;

  constructor(public navCtrl: NavController, 
  						public navParams: NavParams,
  						public alertCtrl: AlertController) {
  	this.lugar = this.navParams.data.lugar;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoPage');
  }

  verAlerta(){
  	let alerta = this.alertCtrl.create(
	  	{
	  		title: "Mi alerta",
	  		subTitle: "El contenido de la alerta",
	  		buttons: ["Ok"]
	  	}
  	);
  	alerta.present();
  }

}
