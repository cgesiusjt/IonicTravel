import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController,ToastController } from 'ionic-angular';
import { AngularFireAuth } from "angularfire2/auth"
 
declare var google;
 
@Component({
  selector: 'home-page',
  templateUrl: 'home.html'
})
export class HomePage {
 
  @ViewChild('map') mapElement: ElementRef;
  map: any;
 
  constructor(private afAuth:AngularFireAuth,private toast:ToastController,public navCtrl: NavController) {
    
  }
 
  ionViewDidLoad(){
    this.loadMap();

    this.afAuth.authState.subscribe(data => {
            if (data && data.email && data.uid){
               this.toast.create({
                  message:`Bem-vindo,${data.email}`,
                  duration:3000
                }).present();
             }else{
              this.toast.create({
                message:`usuario não encontrado`,
                duration:3000
              }).present();
            }
      });
  }
 
  loadMap(){
 
    let latLng = new google.maps.LatLng(-34.9290, 138.6010);
 
    let mapOptions = {
      center: latLng,
      zoom: 15,
      streetViewControl:false,
      mapTypeId: 'roadmap'
    }
 
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
 
  }
}