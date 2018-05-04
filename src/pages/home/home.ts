import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { VeiculoPage } from '../veiculo/veiculo';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  veiculo() {
    this.navCtrl.push(VeiculoPage);
  }

}
