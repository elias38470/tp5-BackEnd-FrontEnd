import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { elementAt } from 'rxjs';
import { Ticket } from 'src/app/models/ticket';
import { Punto3Service } from 'src/app/services/punto3.service';

@Component({
  selector: 'app-punto3',
  templateUrl: './punto3.component.html',
  styleUrls: ['./punto3.component.css']
})
export class Punto3Component {
  comprobante!: Ticket;
  vtickets: Array<Ticket>;
  categoriaEspectador: string="";

  constructor(private serviceTicket: Punto3Service,
              private router:Router){
    this.vtickets = new Array<Ticket>();
   // this.comprobante = new Ticket("",0,"");
  }
  ngOnInit(){
    this.listarTickets();
  }

  public listarTickets(){
    this.serviceTicket.obtenerTickets(this.categoriaEspectador).subscribe(
      result=>{
      let unTicket = new Ticket();
      this.vtickets = new Array<Ticket>
      result.forEach((element:any)=>{
        Object.assign(unTicket,element)
        this.vtickets.push(unTicket);
        unTicket = new Ticket();
      });
      },
      error=>{
        console.log(error)
      }
      )
  }

  public dirForm(){
    this.router.navigate(["punto3-form",0])
  }

  public actualizarTicket(ticket: Ticket){
    this.router.navigate(["punto3-form",ticket._id])
  }

  public eliminarTicket(ticket: Ticket){
    this.serviceTicket.eliminarTicket(ticket).subscribe(
      result=>{
        if(result.status==1){
          alert(result.msg)
          this.listarTickets();
        }
        console.log(result)
      },
  
      error=>{
        console.log(error)
        alert(error.msg)
      }
    )
  }

  public ObtenerTodo(){
    this.categoriaEspectador="";
    this.listarTickets();
  }


  public obtenerXfiltro(){
    this.listarTickets();

  }

}
