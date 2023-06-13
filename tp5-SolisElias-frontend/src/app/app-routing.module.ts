import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { ParcialComponent } from './components/layout/parcial/parcial.component';


const routes: Routes = [
{path:'',redirectTo: 'parcial',pathMatch:'full'},
{path:'header',component:HeaderComponent},
{path:'footer',component:FooterComponent},
{path:'parcial',component:ParcialComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
