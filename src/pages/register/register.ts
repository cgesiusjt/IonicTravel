import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from "angularfire2/auth";
import { User } from "../../models/user";
import { FormsModule } from '@angular/forms';


@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  user = {} as User;  

  constructor(private form: FormsModule, private afAuth:AngularFireAuth,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  async register(user:User){
    try {
      const result = await this.afAuth.auth.createUserWithEmailAndPassword(user.email,user.password);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }

}
