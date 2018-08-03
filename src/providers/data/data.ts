import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class DataProvider {

  constructor(public http: HttpClient) {
    console.log('Hello DataProvider Provider');
  }

  
getData(city:string){
  return this.http.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '%20&%20&APPID=ed83a3b3b70eaa90bc9d510730c88460')
}

}
