import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { ToastController } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
import { PopoverPage } from '../popover/popover';

/**
 * Generated class for the DefaulthomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-defaulthome',
  templateUrl: 'defaulthome.html',
  
})
export class DefaulthomePage {


  info;
  weatherList;
  location:string;
  searchQuery: string = '';
  items: string[];
  search:string;
  city:string;
  iconCd:string;
  condition;
  view:boolean;
  pic:boolean;
  kell:number;
  cell;
  fahh:number;
  con;
  temperature;
  max;
  min;


  constructor(public navCtrl: NavController, public navParams: NavParams,private data:DataProvider,private toastCtrl: ToastController,public plt: Platform,public popoverCtrl: PopoverController) {
  // this.view = false;
  this.pic = true;
  }
  getItems(){
       this.data.getData(this.search).subscribe(weather =>{
      this.info = this.data;
      console.log(this.info);
      this.weatherList = weather;
       console.log(weather);
    }); 
  }
  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({
      ev: myEvent
    });
  }

  submit(){

    this.pic = false;
    this.data.getData(this.search).subscribe(weather =>{
      this.info = this.data;
      console.log(this.info);
      this.weatherList = weather;
       console.log(weather); 
       this.condition ="'http://openweathermap.org/img/w/' + this.iconCd + '.png' "
       this.view = true;
      console.log("--------------------------> "+ this.con);
       if(this.con == 'Celsius'){
         this.temperature = (this.weatherList.main.temp -273.15).toFixed(2);
         this.max = (this.weatherList.main.temp_max -273.15).toFixed(2);
         this.min = (this.weatherList.main.temp_min -273.15).toFixed(2);
         
       }else if(this.con == 'Fahrenheit'){
        this.temperature = (this.weatherList.main.temp -457.87).toFixed(2);
        this.max = (this.weatherList.main.temp_max -457.87).toFixed(2);
        this.min = (this.weatherList.main.temp_min -457.87).toFixed(2);
       }
    });
  }
  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    this.submit();
 

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
      this.presentToast()
    }, 2000);
    
  
  }
  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Weather was Updated successfully',
      duration: 3000,
      position: 'top'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
//   }
//  cel(celsius){
//    this.weatherList = this.cell;
//   console.log('{{((weatherList?.main.temp)-273.15).toFixed(2)}}') 
//    }

// fah(fahrenheit){
//   if(this.temperature == 'fahrenheit'){
//    this.weatherList = this.weatherList;
//   console.log('{{1.8((weatherList?.main.temp)-273+32).toFixed(2)}}') 
// } 
  }
  
}
//  F = 9/5 (K - 273) + 32