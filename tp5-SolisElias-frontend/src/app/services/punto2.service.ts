import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaccion } from '../models/transaccion';
@Injectable({
  providedIn: 'root'
})
export class Punto2Service {
  urlBase:string="http://localhost:3000/api/transaccion/"
  constructor(private _http: HttpClient) {
  }

  public listadoDivisas():Observable<any>{
    const httpOptions={
      headers: new HttpHeaders({
        
        'X-RapidAPI-Key': '17ab1cc992mshad00547bff01db9p184b45jsn10b727cfc53d',
    'X-RapidAPI-Host': 'currency-converter18.p.rapidapi.com',
      }),
    }
    return this._http.get("https://currency-converter18.p.rapidapi.com/api/v1/supportedCurrencies",httpOptions);
  }

  public convertirDivisas(from: string,to: string, amount: string):Observable<any>{
    const httpOptions={
      headers: new HttpHeaders({
        
        'X-RapidAPI-Key': '17ab1cc992mshad00547bff01db9p184b45jsn10b727cfc53d', /*'be2541005emsh5d81eb30c3b7abep1517f7jsnf1d2462281f7',*/
        'X-RapidAPI-Host': 'currency-converter18.p.rapidapi.com'
        /* link de la apis https://rapidapi.com/solutionsbynotnull/api/currency-converter18*/ 
      }),
    }
   /* const body = new HttpParams()
    .set('from', from)
      .set('to',to)
        .set('amount',amount);*/
    return this._http.get("https://currency-converter18.p.rapidapi.com/api/v1/convert?from="+from+"&to="+to+"&amount="+amount,httpOptions);
  }

  public guardarTransaccion(transaccion:Transaccion):Observable<any>{
    const httpOptions={
      headers : new HttpHeaders({
        "Content-type":"application/json"
      }),
      params : new HttpParams()
    }
    
    let body = JSON.stringify(transaccion);

    return this._http.post(this.urlBase,body,httpOptions);
  }

  /**
 * Método para obtener las transacciones filtradas por moneda de origen, moneda de destino y correo electrónico del cliente.
 * @param origen La moneda de origen utilizada como filtro para las transacciones.
 * @param destino La moneda de destino utilizada como filtro para las transacciones.
 * @param email El correo electrónico del cliente utilizado como filtro para las transacciones.
 * @returns Un Observable que emite la respuesta HTTP con las transacciones obtenidas.
 */
  public obtenerTransacciones(origen:string,destino:string,email:string):Observable<any>{
    const httpOptions={
      headers : new HttpHeaders({

      }),
      params : new HttpParams()
      .append("origen",origen)
      .append("destino",destino)
      .append("email",email)
    }
  
    return this._http.get(this.urlBase,httpOptions);
  }
  
}
