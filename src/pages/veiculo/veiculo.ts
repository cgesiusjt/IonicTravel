import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AngularFireDatabase } from 'angularfire2/database';

@IonicPage()
@Component({
  selector: 'page-veiculo',
  templateUrl: 'veiculo.html',
})

export class VeiculoPage {

  veiculo = {
    marca: 'Chevrolet',
    modelo: 'S10',
    cor: 'Preta',
    anoFabricacao: '2018'
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, private  db: AngularFireDatabase) {
    //this.db.list('veiculo').push(this.veiculo);
  }

  home() {
    this.navCtrl.push(HomePage);
  }

  save(veiculo: any) {
    try {
      if(veiculo !== null) {
        
      }
    } catch(e) {
      console.log(e);
    }
  }

}
