import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  info;
  weatherList;
  location:string;
veza = 0;
search:string;
city:string;

  constructor(public navCtrl: NavController, public navParams: NavParams,private weather: DataProvider) {   
    this.veza = 0;
    
    this.weather.getData(this.search).subscribe(weather =>{
      this.info = this.weather;
      console.log(this.info);
      this.weatherList = weather;
       console.log(weather);
    });
    

}
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
  view(){
    this.veza = 1;
    if(this.location == 'pta')
    this.weather.getData(this.search).subscribe(weather =>{
      this.info = this.weather;
      console.log(this.info);
      this.weatherList = weather;
       console.log(weather);
    });

}
}
