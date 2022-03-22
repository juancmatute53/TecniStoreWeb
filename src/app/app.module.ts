import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from "@angular/material/button";
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";

import {MatTooltipModule} from "@angular/material/tooltip";

import {FormproductosComponent} from "./components/productos/formproductos.component";
import { CategoriaComponent } from './components/categoria/categoria.component';
import { CategoriasComponent } from './components/categorias/categorias.component';

import { MatMenuModule} from '@angular/material/menu';
import { ProductoComponent } from './components/producto/producto.component';
import { FacturasComponent } from './components/facturas/facturas.component'
import {MatTreeModule} from '@angular/material/tree';
import { ProductosComponent } from './components/productos/productos.component';
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import { FilterPipe } from './components/pipes/filter.pipe';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    LoginComponent,
    DashboardComponent,
    ProductoComponent,
    FacturasComponent,
    ProductosComponent,
    FormproductosComponent,
    CategoriaComponent,
    CategoriasComponent,
    FilterPipe,

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

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
