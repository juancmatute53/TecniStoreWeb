import { Component, OnInit } from '@angular/core';
import {Detallepedido} from "../detallepedido/detallepedido";
import {DetallepedidoService} from "../detallepedido/detallepedido.service";
import {Productos} from "../productos/productos";
import {ProductosService} from "../productos/productos.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  detallepedido: Detallepedido[] = [];
  productos: Productos[] = [];

  constructor( private detallepedidoService: DetallepedidoService, public productosService: ProductosService ) { }

  mercaderia: number =0;
  producto: number =0;

  ngOnInit(): void {

    this.productosService.getProducto().subscribe(
      productos => this.productos = productos
    )

    this.productosService.getProducto().subscribe(
      e=>{
        this.mercaderia = e.reduce((acc,obj)=>acc+(obj.stock * obj.precio),0);
      }
    )


    this.detallepedidoService.getDetallePedido().subscribe(
      detallepedido => this.detallepedido = detallepedido
    )

    this.detallepedidoService.getDetallePedido().subscribe(
      e=>{
        this.producto = e.reduce((acc,obj)=>acc+(obj.cantidad * obj.precioUnitario),0);
      }
    )
  }

}
