import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class Punto1Service {

  urlBase:string="http://localhost:3000/api/producto/"
 
  constructor(private _http: HttpClient) {

  }

 
  public obtenerProductos():Observable<any>{
    const httpOptions={
      headers : new HttpHeaders({

      }),
      params : new HttpParams()
    }
  
    return this._http.get(this.urlBase,httpOptions);
  } 

  public obtenerProducto(id:string):Observable<any>{
    const httpOptions={
      headers : new HttpHeaders({

      }),
      params : new HttpParams()
    }
  
    return this._http.get(this.urlBase+id,httpOptions);
  }

  public obtenerProductosDestacados():Observable<any>{
    const httpOptions={
      headers : new HttpHeaders({

      }),
      params : new HttpParams()
      .append("destacado","true")
    }
  
    return this._http.get(this.urlBase,httpOptions);
  }

  public guardarProducto(producto:Producto):Observable<any>{
    const httpOptions={
      headers : new HttpHeaders({
        "Content-type":"application/json"
      }),
      params : new HttpParams()
    }
    
    let body = JSON.stringify(producto);

    return this._http.post(this.urlBase,body,httpOptions);
  }
}
