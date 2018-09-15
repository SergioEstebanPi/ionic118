import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NosotrosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nosotros',
  templateUrl: 'nosotros.html',
})
export class NosotrosPage {

	nosotros:Array<string>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.nosotros = ["Jaime", "Pedro", "Alberto"];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NosotrosPage');
  }

}
