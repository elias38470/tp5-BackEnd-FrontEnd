import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Producto } from 'src/app/models/producto';
import { Punto1Service } from 'src/app/services/punto1.service';

@Component({
  selector: 'app-punto1',
  templateUrl: './punto1.component.html',
  styleUrls: ['./punto1.component.css']
})
export class Punto1Component {
listaResultados:Array<Producto>;

constructor(private punto1Service:Punto1Service,
            private router:Router){
this.listaResultados = new Array<Producto>;
}


ngOnInit(){
  this.obtenerProductos();
}

public obtenerProductos(){
  this.punto1Service.obtenerProductosDestacados().subscribe(
    result=>{
      console.log(result)
      let unProducto = new Producto();
      result.forEach((element: any )=> {
        Object.assign(unProducto,element)
        this.listaResultados.push(unProducto)
        unProducto = new Producto();
      });
      //this.listaResultados = result;
      console.log(this.listaResultados[0])
    },

    error=>{
      console.log(error)
    }
  )
}

public nuevoProducto(){
  this.router.navigate(["punto1-form",0])
}

public actualizarProducto(producto:Producto){
  this.router.navigate(["punto1-form",producto._id])
}

}
