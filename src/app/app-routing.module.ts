import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';
import {FacturatotalComponent} from "./components/facturas/facturatotal/facturatotal.component";
import {FacturadespachadaComponent} from "./components/facturas/facturadespachada/facturadespachada.component";
import {FacturaxdespacharComponent} from "./components/facturas/facturaxdespachar/facturaxdespachar.component";
import {FacturaxclienteComponent} from "./components/facturas/facturaxcliente/facturaxcliente.component";
import {ProductsComponent} from "./components/administracion/productos/products.component";
import {CategoriesComponent} from "./components/administracion/categorias/categories.component";
import {GraficasComponent} from "./components/graficas/graficas.component";

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

    path: "dashboard",
    component: DashboardComponent,
    pathMatch: "full"
  },

  {
    path: "productos",
    component: ProductsComponent,
    //pathMatch: "full"
  },

  {
    path: "productos/:id",
    component: ProductsComponent,
    //pathMatch: "full"
  },

  {
    path: "categorias",
    component: CategoriesComponent,
    //pathMatch: "full"
  },

  {
    path: "categorias/:id",
    component: CategoriesComponent,
    //pathMatch: "full"
  },



  {
    path: "facturacliente/:cedula/:estado/:tienda/:fecha/:id",
    component: FacturaxclienteComponent,
    //pathMatch: "full"
  },


  {
    path: "facturatotales",
    component: FacturatotalComponent,
    //pathMatch: "full"
  },
  {
    path: "facturadespachada",
    component: FacturadespachadaComponent,
    //pathMatch: "full"
  },
  {
    path: "facturaxdespachada",
    component: FacturaxdespacharComponent,
    //pathMatch: "full"
  },
  {
    path: "grafica",
    component: GraficasComponent,
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
