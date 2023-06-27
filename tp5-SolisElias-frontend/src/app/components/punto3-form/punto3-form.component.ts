import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Espectador } from 'src/app/models/espectador';
import { Ticket } from 'src/app/models/ticket';
import { EspectadorService } from 'src/app/services/espectador.service';
import { Punto3Service } from 'src/app/services/punto3.service';

@Component({
  selector: 'app-punto3-form',
  templateUrl: './punto3-form.component.html',
  styleUrls: ['./punto3-form.component.css']
})
export class Punto3FormComponent {
  listaEspectadores:Array<Espectador>
  ticket:Ticket;
  accion:String="";
  constructor(
    private activateRoute:ActivatedRoute,
    private ticketService:Punto3Service,
    private espectadorService:EspectadorService,
    private router:Router
  ){
    this.ticket = new Ticket();
    this.listaEspectadores = new Array<Espectador>();
  }

  ngOnInit():void{
    this.activateRoute.params.subscribe(params =>{
      if (params['id']=="0"){
        this.accion = "new";
      }else{
        this.accion = "update";
        this.cargarTicket(params['id']);
      }    
    })
  }

  async listarEspectadores(){
    this.espectadorService.obtenerEspectadores().subscribe(
      result=>{
        let unEspectador = new Espectador();
        result.forEach((element:any)=>{
          Object.assign(unEspectador,element)
          this.listaEspectadores.push(unEspectador)
          unEspectador = new Espectador();
        })
      },
      error=>{
        console.log(error)
      }
    )
  }


  async cargarTicket(id:string){

    await this.listarEspectadores();

    this.ticketService.obtenerTicket(id).subscribe(
      result=>{
        console.log(result)
        Object.assign(this.ticket,result)
        this.ticket.espectador = this.listaEspectadores.find(item => (item._id == this.ticket.espectador._id))!
      },
      error=>{
        console.log(error);
      }
    )
  }

  public guardarTicket(){
    this.ticketService.guardarTicket(this.ticket).subscribe(
      result=>{
        if(result.status==1){
          alert(result.msg)
          this.router.navigate(["punto3"])
        }
        console.log(result);
      },
      error=>{
        console.log(error);
        alert(error.msg)
      }
    )
  }

  public actualizarTicket(){
    this.ticketService.actualizarTicket(this.ticket).subscribe(
      result=>{
       
        if(result.status==1){
          alert(result.msg)
          this.router.navigate(["punto3"])
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
