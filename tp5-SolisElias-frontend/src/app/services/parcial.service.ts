import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParcialService {

  constructor(private _http:HttpClient) { }

  public getBuscar(ip:string):Observable<any>{

    const httpOptions={
      headers: new HttpHeaders({
        'content-type': 'application/x-www-form-urlencoded',
      'X-RapidAPI-Key': '17ab1cc992mshad00547bff01db9p184b45jsn10b727cfc53d',
      'X-RapidAPI-Host': 'community-neutrino-ip-info.p.rapidapi.com'
      }),
    }
    
 //este es en el caso de un post
    const body = new HttpParams()
    .set('ip',ip)
    //tener en cuenta que este va fuera del const header
    //mientras que los parametros que van para un get van dentro del const hhtpOption
    return this._http.post("https://community-neutrino-ip-info.p.rapidapi.com/ip-info",body,httpOptions)
  }

  public getBuscar1(lat:string,lon:string):Observable<any>{

    const httpOptions={
      headers: new HttpHeaders({
        'content-type': 'application/x-www-form-urlencoded',
      'X-RapidAPI-Key': '17ab1cc992mshad00547bff01db9p184b45jsn10b727cfc53d',
      'X-RapidAPI-Host': 'community-neutrino-ip-info.p.rapidapi.com'
      }),
      
      
    }
    return this._http.get("https://address-from-to-latitude-longitude.p.rapidapi.com/geolocationapi?lat="+lat+"ng="+lon,httpOptions)
 
  //este es en el caso de un post


  //este es en el caso de que se use un json como parametro 
  /*const body = {
    text: text,
    lang: lang,
    format: "mp3",
  }; */
}

}
