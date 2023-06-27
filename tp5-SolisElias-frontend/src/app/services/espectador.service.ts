import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EspectadorService {

  urlBase:string="http://localhost:3000/api/espectador/"

  constructor(private _http: HttpClient) { }

  public obtenerEspectador(id:string):Observable<any>{
    const httpOptions={
      headers : new HttpHeaders({

      }),
      params : new HttpParams()
    }
  
    return this._http.get(this.urlBase+id,httpOptions);
  }

  public obtenerEspectadores():Observable<any>{
    const httpOptions={
      headers : new HttpHeaders({

      }),
      params : new HttpParams()
    }
    return this._http.get(this.urlBase,httpOptions);
  } 
}
