import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController,ToastController } from 'ionic-angular';
import { AngularFireAuth } from "angularfire2/auth"
 
declare var google;
 
@Component({
  selector: 'home-page',
  templateUrl: 'home.html'
})
export class HomePage {
  directionsService = new google.maps.DirectionsService();
  directionsDisplay = new google.maps.DirectionsRenderer();
  map: any;
  startPosition: any;
  originPosition: string;
  destinationPosition: string;
 
  @ViewChild('map') mapElement: ElementRef;
 
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

    this.startPosition = new google.maps.LatLng(-23.569419, -46.71383);
    
    let mapOptions = {
      center:this.startPosition,
      zoom: 15,
      streetViewControl:false,
      mapTypeId: 'roadmap',
      disableDefaultUI: true
    }
    
    this.map = new google.maps.Map(document.getElementById('map'), mapOptions);
    this.directionsDisplay.setMap(this.map);
  }

  calculateRoute() {
    if (this.destinationPosition && this.originPosition) {
      const request = {
        origin: this.originPosition,
        destination: this.destinationPosition,
        travelMode: 'DRIVING'
      };
 
      this.traceRoute(this.directionsService, this.directionsDisplay, request);
    }
  }
 
  traceRoute(service: any, display: any, request: any) {
    service.route(request, function (result, status) {
      if (status == 'OK') {
        display.setDirections(result);
      }
    });
  }
}