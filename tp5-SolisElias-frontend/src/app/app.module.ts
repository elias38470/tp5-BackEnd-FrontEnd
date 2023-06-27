import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParcialComponent } from './components/layout/parcial/parcial.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { Punto1Component } from './components/layout/punto1/punto1.component';
import { Punto1FormComponent } from './components/layout/punto1-form/punto1-form.component';
import { Punto2Component } from './components/punto2/punto2.component';
import { Punto2TransaccionComponent } from './components/punto2-transaccion/punto2-transaccion.component';
import { Punto3Component } from './components/punto3/punto3.component';
import { Punto3FormComponent } from './components/punto3-form/punto3-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ParcialComponent,
    HeaderComponent,
    FooterComponent,
    Punto1Component,
    Punto1FormComponent,
    Punto2Component,
    Punto2TransaccionComponent,
    Punto3Component,
    Punto3FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
