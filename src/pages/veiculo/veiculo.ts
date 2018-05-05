import { Component, NgModule } from '@angular/core';
import { IonicPage, NavController, NavParams, Alert } from 'ionic-angular';
import { Veiculo } from '../../models/veiculo';
import { AngularFireDatabase } from 'angularfire2/database';
import { FormsModule } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-veiculo',
  templateUrl: 'veiculo.html',
})
export class VeiculoPage {

  veiculo = {} as Veiculo;

  constructor(public navCtrl: NavController, public navParams: NavParams, private db: AngularFireDatabase, private form: FormsModule) {
      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VeiculoPage');
  }

  cadastrar(veiculo: Veiculo) {
      try {
        if(veiculo.marca !== null && veiculo.marca !== undefined) {
          this.db.list('Veiculo').push(this.veiculo);
          alert(">>>Veiculo Cadastrado com sucesso <<< " + veiculo.marca)
        } else {
          alert("Veiculo com valor nulo: " + veiculo);
        }
      } catch (error) {
        console.log(">>> Erro ao cadastrar Veiculo <<< " + error);
        alert(">>> Erro ao cadastrar veiculo <<<");
      }

  }

}
