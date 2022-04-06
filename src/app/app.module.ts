import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule, routingComponents} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {NavBarComponent} from './components/nav-bar/nav-bar.component';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatMenuModule} from '@angular/material/menu';
import {FacturasComponent} from './components/facturas/facturas.component'
import {MatTreeModule} from '@angular/material/tree';
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {FilterPipe} from './components/pipes/filter.pipe';
import {PcategoriaPipe} from './components/pipes/pcategoria.pipe';
import {CategoriaComponent} from './components/categoria/categoria.component';
import {FormcategoriaComponent} from './components/categoria/formcategoria.component';
import {CategoriasComponent} from './components/categorias/categorias.component';
import {RestapiService} from './restapi.service';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatGridListModule} from "@angular/material/grid-list";
import {FacturaPipe} from './components/pipes/factura.pipe';
import {FacturatotalComponent} from './components/facturas/facturatotal/facturatotal.component';
import {FacturadespachadaComponent} from './components/facturas/facturadespachada/facturadespachada.component';
import {FacturaxdespacharComponent} from './components/facturas/facturaxdespachar/facturaxdespachar.component';
import {FacturaxclienteComponent} from './components/facturas/facturaxcliente/facturaxcliente.component';
import {ListproductosComponent} from './components/administracion/productos/listproductos/listproductos.component';
import {ProductsComponent} from './components/administracion/productos/products.component';
import {CategoriesComponent} from './components/administracion/categorias/categories.component';
import {FormproductsComponent} from './components/administracion/productos/formproducts/formproducts.component';
import { FormcategoriesComponent } from './components/administracion/categorias/formcategories/formcategories.component';
import { ListcategoriesComponent } from './components/administracion/categorias/listcategories/listcategories.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    LoginComponent,
    DashboardComponent,
    FacturasComponent,
    FilterPipe,
    PcategoriaPipe,
    CategoriaComponent,
    FormcategoriaComponent,
    CategoriasComponent,
    routingComponents,
    FacturaPipe,
    FacturatotalComponent,
    FacturadespachadaComponent,
    FacturaxdespacharComponent,
    FacturaxclienteComponent,
    ListproductosComponent,
    ProductsComponent,
    CategoriesComponent,
    FormproductsComponent,
    FormcategoriesComponent,
    ListcategoriesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    RouterModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatMenuModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatTooltipModule,
    MatTreeModule,
    HttpClientModule,
    MatOptionModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatGridListModule,
  ],
  providers: [RestapiService],
  bootstrap: [AppComponent]
})

export class AppModule {
}
