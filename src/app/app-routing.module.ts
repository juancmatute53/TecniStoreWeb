<<<<<<< Updated upstream
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
=======
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {FacturasComponent} from './components/facturas/facturas.component';
import {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';
import {ProductoComponent} from './components/producto/producto.component';
import {FormproductosComponent} from "./components/productos/formproductos.component";
import {CategoriaComponent} from "./components/categoria/categoria.component";
>>>>>>> Stashed changes

const routes: Routes = [

  {
  path:'',
  component:HomeComponent,
  pathMatch:'full'
  },
  {
    path:"login",
    component:LoginComponent,
    pathMatch:"full"
  },
  {
<<<<<<< Updated upstream
    path:"dashboard",
    component:DashboardComponent,
    pathMatch:"full"
  }
=======
    path: "dashboard",
    component: DashboardComponent,
    //pathMatch: "full"
  },
  {
    path: "producto",
    component: ProductoComponent,
    //pathMatch: "full"
  },
  {
    path: "facturas",
    component: FacturasComponent,
    //pathMatch: "full"
  },
  {
    path: "producto/:id",
    component: ProductoComponent,
    //pathMatch: "full"
  },
  {
    path: "categoria",
    component: CategoriaComponent,
    //pathMatch: "full"
  },
  {
    path: "categoria/:id",
    component: CategoriaComponent,
    //pathMatch: "full"
  },
>>>>>>> Stashed changes

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
