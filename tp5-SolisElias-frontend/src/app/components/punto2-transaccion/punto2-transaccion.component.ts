import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Transaccion } from 'src/app/models/transaccion';
import { Punto2Service } from 'src/app/services/punto2.service';

@Component({
  selector: 'app-punto2-transaccion',
  templateUrl: './punto2-transaccion.component.html',
  styleUrls: ['./punto2-transaccion.component.css']
})
export class Punto2TransaccionComponent {
  listadoDivisas:Array<any>;
  listaTransacciones:Array<Transaccion>
  monedaOrigen:string="";
  monedaDestino:string="";
  email:string="";
  constructor(private punto2Service: Punto2Service,
              private router:Router){
    this.listadoDivisas = new Array<any>
    this.listaTransacciones = new Array<Transaccion>

  }

  ngOnInit(){
    this.obtenerTransacciones();
    this.punto2Service.listadoDivisas().subscribe(
      result=>{
        console.log(result)
        this.listadoDivisas=result
       // console.log(this.listadoDivisas[0].symbol);
        //console.log(this.listadoDivisas[0].name);
      },
      error=>{
        console.log(error);
      }
    )
  }

  /**
 * Método para obtener todas las transacciones sin aplicar filtros de moneda de origen y destino.
 * Establece las propiedades `monedaOrigen` y `monedaDestino` como cadenas vacías.
 * Llama al método `obtenerTransacciones()` para obtener todas las transacciones sin filtros.
 */
  public todasTransacciones(){
    this.monedaOrigen="";
    this.monedaDestino="";
    this.obtenerTransacciones();
  }


/**
 * Método para obtener las transacciones aplicando un filtro.
 * Llama al método `obtenerTransacciones()` para obtener las transacciones correspondientes.
 * Este método actúa como un atajo para invocar directamente el método `obtenerTransacciones()`.
 */
  public obtenerXfiltro(){
    this.obtenerTransacciones();
  }

  /**
 * Método para obtener las transacciones.
 * Realiza una llamada al servicio `punto2Service` para obtener las transacciones correspondientes.
 * Los parámetros `monedaOrigen`, `monedaDestino` y `email` son utilizados para filtrar las transacciones.
 * Las transacciones obtenidas se asignan a la propiedad `listaTransacciones`.
 * Por ahora solo la vista solo usa las filtraciones por monedaOrigen y monedaDestino
 */
  public obtenerTransacciones() {
    this.punto2Service.obtenerTransacciones(this.monedaOrigen,this.monedaDestino,this.email).subscribe(
      result=>{
        let unaTransaccion = new Transaccion();
        this.listaTransacciones = new Array<Transaccion>
        result.forEach((element:any)=>{
          Object.assign(unaTransaccion,element)
          this.listaTransacciones.push(unaTransaccion)
          unaTransaccion = new Transaccion();
        });
        console.log(this.listaTransacciones)
      },
      error=>{
        console.log(error)
      }
    )
  }

}
