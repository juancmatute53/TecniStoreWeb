import { Component, OnInit } from '@angular/core';
import {Productos} from "./productos";
import {ProductosService} from "./productos.service";
import {Categorias} from "../categorias/categorias";
import {CategoriasService} from "../categorias/categorias.service";

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos1: Productos[] = []

  constructor(private productosService: ProductosService) { }

  ngOnInit(): void {
    this.productosService.getProducto().subscribe(
      productos1 => this.productos1 =productos1
    );


  }

}
