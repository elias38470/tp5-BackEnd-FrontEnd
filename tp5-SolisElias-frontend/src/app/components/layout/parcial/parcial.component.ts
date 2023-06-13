import { Component } from '@angular/core';
import { ParcialService } from 'src/app/services/parcial.service';

@Component({
  selector: 'app-parcial',
  templateUrl: './parcial.component.html',
  styleUrls: ['./parcial.component.css']
})
export class ParcialComponent {

elementoBuscado:string="";
listaResultados:Array<any>;
resultado:any="";
resultado1:any="";
seleccion:any="";
link:string="";
latitud:string="";
longitud:string="";

constructor(private parcilService: ParcialService){
  this.listaResultados = new Array<any>
}

ngOnInit(){
  
}

  public buscar(){
    this.parcilService.getBuscar(this.elementoBuscado).subscribe(
      result=>{
       // this.listaResultados=result.results
        console.log(result.country)
        this.resultado = result;
        this.latitud=result.latitude;
        this.longitud=result.longitude;
        this.link="https://maps.google.com/?q="+this.latitud+","+this.longitud;
        
        
        this.parcilService.getBuscar1(this.latitud,this.longitud).subscribe(
          result=>{
            this.listaResultados=result;
            console.log(result)
          },
          error=>{
            console.log(error)
          }
        )

      },
      error=>{
        console.log(error)
      }
    )
  }

  public seleccionado(r:any){
    this.seleccion=r;
  }

}
