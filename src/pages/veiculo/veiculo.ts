import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private db: AngularFireDatabase, private alertCtrl: AlertController) {
      
  }

  cadastrar(veiculo: Veiculo) {
      try {
        if(veiculo.marca !== null && veiculo.marca !== undefined) {
          this.db.list('Veiculo').push(this.veiculo);
          this.showAlert();
        } else {
          alert("Veiculo com valor nulo: " + veiculo);
        }
      } catch (error) {
        console.log(">>> Erro ao cadastrar Veiculo <<< " + error);
        alert(">>> Erro ao cadastrar veiculo <<<");
      }

  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Veiculo',
      subTitle: 'Veiculo ' + this.veiculo.modelo + " cadastrado com sucesso.",
      buttons: ['OK']
    });
    alert.present();
  }

}
