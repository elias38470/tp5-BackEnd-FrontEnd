import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ticket } from '../models/ticket';

@Injectable({
  providedIn: 'root'
})
export class Punto3Service {
  
  urlBase:string="http://localhost:3000/api/ticket/"

  constructor(private _http: HttpClient) { }

  public obtenerTickets(categoriaEspectador:string):Observable<any>{
    const httpOptions={
      headers : new HttpHeaders({

      }),
      params : new HttpParams()
      .append("categoriaEspectador",categoriaEspectador)
    }
    return this._http.get(this.urlBase,httpOptions);
  }

  public obtenerTicket(id:string):Observable<any>{
    const httpOptions={
      headers : new HttpHeaders({

      }),
      params : new HttpParams()
    }
  
    return this._http.get(this.urlBase+id,httpOptions);
  }

  public guardarTicket(ticket:Ticket):Observable<any>{
    const httpOptions={
      headers : new HttpHeaders({
        "Content-type":"application/json"
      }),
      params : new HttpParams()
    }
    
    let body = JSON.stringify(ticket);

    return this._http.post(this.urlBase,body,httpOptions);
  }

  public actualizarTicket(ticket:Ticket):Observable<any>{
    const httpOptions={
      headers : new HttpHeaders({
        "Content-type":"application/json"
      }),
      params : new HttpParams()
    }
    
    let body = JSON.stringify(ticket);

    return this._http.put(this.urlBase+ticket._id,body,httpOptions);
  }

  public eliminarTicket(ticket:Ticket):Observable<any>{
    const httpOptions={
      headers : new HttpHeaders({
      
      }),
      params : new HttpParams()
    }

    return this._http.delete(this.urlBase+ticket._id,httpOptions);
  }
}
