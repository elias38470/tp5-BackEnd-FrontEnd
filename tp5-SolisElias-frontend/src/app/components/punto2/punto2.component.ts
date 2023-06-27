import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Transaccion } from 'src/app/models/transaccion';
import { Punto2Service } from 'src/app/services/punto2.service';

@Component({
  selector: 'app-punto2',
  templateUrl: './punto2.component.html',
  styleUrls: ['./punto2.component.css']
})
export class Punto2Component {
  resultado:number =0;
  cantidad:number=0;
  monedaOrigen:string="";
  monedaDestino:string="";
  listadoDivisas:Array<any>;
  tablaDivisas:Array<string>;
  tablaDivisasResultados:Array<string>
  tablaDivisasResultadosInversa:Array<string>

  transaccion:Transaccion;


  constructor(private punto2Service: Punto2Service,
              private router:Router){
      this.listadoDivisas = new Array<any>
      this.tablaDivisas = new Array<string>
      this.tablaDivisas.push("USD");
      this.tablaDivisas.push("EUR");
      this.tablaDivisas.push("GBP");
      this.tablaDivisasResultados = new Array<string>
      this.tablaDivisasResultadosInversa = new Array<string>
      this.llenarTabla();
      this.transaccion=new Transaccion();
      this.transaccion.tasaConversion=0;
  }
  ngOnInit(){
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

  /*public convertirDivisas(): void{
    this.punto2Service.convertirDivisas(this.monedaOrigen,this.monedaDestino,this.cantidad).subscribe(
      result=>{
        //console.log(result);
        this.resultado = result.result.convertedAmount;
      },
      error=>{
        console.log(error);
      }
    )

  }*/

  public convertirDivisas(){
    this.transaccion.calcularCantidadDestino();
    console.log(this.transaccion)
    this.punto2Service.guardarTransaccion(this.transaccion).subscribe(
      result=>{
        if(result.status==1){
          alert(result.msg)
        }
        console.log(result);
      },
      error=>{
        console.log(error);
        alert(error.msg)
      }
    )
  }

  public tablaTransacciones(){
    this.router.navigate(["punto2-transaccion"])
  }

  public llenarTabla():void {
    
    this.punto2Service.convertirDivisas(this.tablaDivisas[0],this.tablaDivisas[0],"1").subscribe(
      result=>{
        console.log(result);
        this.tablaDivisasResultados.push(result.result.convertedAmount);

        this.punto2Service.convertirDivisas(this.tablaDivisas[0],this.tablaDivisas[1],"1").subscribe(
          result=>{
            console.log(result);
            this.tablaDivisasResultados.push(result.result.convertedAmount);

            this.punto2Service.convertirDivisas(this.tablaDivisas[0],this.tablaDivisas[2],"1").subscribe(
              result=>{
                console.log(result);
                this.tablaDivisasResultados.push(result.result.convertedAmount);
              },
              error=>{
                console.log(error);
              }
            )
          },
          error=>{
            console.log(error);
          }
        )

      },
      error=>{
        console.log(error);
      }
      
    )

    this.punto2Service.convertirDivisas(this.tablaDivisas[0],this.tablaDivisas[0],"1").subscribe(
      result=>{
        console.log(result);
        this.tablaDivisasResultadosInversa.push(result.result.convertedAmount);

        this.punto2Service.convertirDivisas(this.tablaDivisas[1],this.tablaDivisas[0],"1").subscribe(
          result=>{
            console.log(result);
            this.tablaDivisasResultadosInversa.push(result.result.convertedAmount);

            this.punto2Service.convertirDivisas(this.tablaDivisas[2],this.tablaDivisas[0],"1").subscribe(
              result=>{
                console.log(result);
                this.tablaDivisasResultadosInversa.push(result.result.convertedAmount);
              },
              error=>{
                console.log(error);
              }
            )

          },
          error=>{
            console.log(error);
          }
        )  

      },
      error=>{
        console.log(error);
      }
    )

  
}

}
