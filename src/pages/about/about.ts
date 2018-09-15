import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

	lugares:Array<any>;

  constructor(public navCtrl: NavController) {
  	this.lugares = [
	  	{
	  		nombre: "Cafetería",
	  		pagina: "CafeteriaPage",
	  		icono: "logo-buffer"
	  	},
	  	{
	  		nombre: "Centro comercial",
	  		pagina: "CentrocomercialPage",
	  		icono: "briefcase"
	  	},
	  	{
	  		nombre: "Trabajo",
	  		icono: "briefcase"
	  	},
	  	{
	  		nombre: "Parque",
	  		icono: "american-football"
	  	},
	  	{
	  		nombre: "Floristería",
	  		icono: "bonfire"
	  	},
  	];
  }

  irA(pagina){
  	this.navCtrl.push(pagina);
  }

  irAPlantilla(lugar){
  	this.navCtrl.push("InfoPage", {lugar: lugar});
  }

}
