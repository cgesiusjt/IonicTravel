import { Component, Inject, Injectable } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';


@IonicPage()
@Component({
  selector: 'page-veiculo',
  templateUrl: 'veiculo.html',
})
@Injectable()
export class VeiculoPage {

  private PATH = 'veiculo/';

  veiculo = {
    marca: 'Chevrolet',
    modelo: 'S10',
    cor: 'Preta'
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, private  db: AngularFireDatabase) {
    //this.db.list('veiculo').push(this.veiculo);
  }

  home() {
    this.navCtrl.push(HomePage);
  }

  save(veiculo: any) {

  }

}
