import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from "angularfire2/auth";
import { HomePage } from '../../pages/home/home'
import { User } from "../../models/user";


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user = {} as User;

  constructor(private afAuth:AngularFireAuth,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  async login(user:User){
    try {
      const result = await this.afAuth.auth.signInWithEmailAndPassword(user.email,user.password)
      if(result){
      this.navCtrl.setRoot(HomePage);
      }
    } catch (error) {
      console.log(error)
    }
  }

  register(){
    this.navCtrl.push('RegisterPage');
  }

}
