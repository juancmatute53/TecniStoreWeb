import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {FacturasComponent} from './components/facturas/facturas.component';
import {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';
import {ProductoComponent} from './components/producto/producto.component';
import {FormproductosComponent} from "./components/productos/formproductos.component";

import {CategoriasComponent} from "./components/categorias/categorias.component";


const routes: Routes = [

  {
    path: '',
    component: HomeComponent,
    //pathMatch: 'full'
  },
  {
    path: "login",
    component: LoginComponent,
    //pathMatch: "full"
  },
  {

    path:"dashboard",
    component:DashboardComponent,
    pathMatch:"full"
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
    component: CategoriasComponent,
    //pathMatch: "full"
  },
  {
    path: "categoria/:id",
    component: CategoriasComponent,
    //pathMatch: "full"
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

export const routingComponents = [LoginComponent]