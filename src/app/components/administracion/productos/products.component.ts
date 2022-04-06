import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['../../facturas/facturas.component.css']
})
export class ProductsComponent implements OnInit {

  listarproductos: string = "LISTAR PRODUCTOS";
  crearoeditar: string = "CREAR O EDITAR PRODUCTOS";

  constructor() { }

  ngOnInit(): void {
  }

}
