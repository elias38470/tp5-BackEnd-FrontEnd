import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/models/producto';
import { Punto1Service } from 'src/app/services/punto1.service';

@Component({
  selector: 'app-punto1-form',
  templateUrl: './punto1-form.component.html',
  styleUrls: ['./punto1-form.component.css']
})
export class Punto1FormComponent {
producto:Producto;
accion:string="";
constructor(private activatedRoute: ActivatedRoute,
            private punto1Service: Punto1Service,
            private router:Router){
            this.producto = new Producto();
}

ngOnInit(): void {
  this.activatedRoute.params.subscribe(params =>{
    if (params['id']=="0"){
      this.accion = "new";
    }else{
      this.accion = "update";
      this.cargarProducto(params['id']);
    }
  })
}
  

cargarProducto(id: string) {
  this.punto1Service.obtenerProducto(id).subscribe(
    result=>{
      console.log(result);
      Object.assign(this.producto,result)
    },
    error=>{
      console.log(error);
    }
  )  
}

public guardarProducto(){
  this.punto1Service.guardarProducto(this.producto).subscribe(
    result=>{
      if(result.status==1){
        alert(result.msg)
        this.router.navigate(["punto1"])
      }
      console.log(result);
    },
    error=>{
      console.log(error);
      alert(error.msg)
    }
  )

}

}
