import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { ParcialComponent } from './components/layout/parcial/parcial.component';
import { Punto1Component } from './components/layout/punto1/punto1.component';
import { Punto1FormComponent } from './components/layout/punto1-form/punto1-form.component';
import { Punto2Component } from './components/punto2/punto2.component';
import { Punto2TransaccionComponent } from './components/punto2-transaccion/punto2-transaccion.component';
import { Punto3Component } from './components/punto3/punto3.component';
import { Punto3FormComponent } from './components/punto3-form/punto3-form.component';

const routes: Routes = [
{path:'',redirectTo: 'parcial',pathMatch:'full'},
{path:'header',component:HeaderComponent},
{path:'footer',component:FooterComponent},
{path:'parcial',component:ParcialComponent},
{path:'punto1',component:Punto1Component},
{path:'punto1-form/:id', component:Punto1FormComponent},
{path:'punto2',component:Punto2Component},
{path:'punto2-transaccion',component:Punto2TransaccionComponent},
{path:'punto3',component:Punto3Component},
{path:'punto3-form/:id',component:Punto3FormComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
