import {Component, OnInit} from '@angular/core';
import {PedidoService} from "../pedido/pedido.service";
import {Pedido} from "../pedido/pedido";
import {ClienteService} from "../cliente/cliente.service";
import {Cliente} from "../cliente/cliente";
import {Detallepedido} from "../detallepedido/detallepedido";
import {DetallepedidoService} from "../detallepedido/detallepedido.service";
import {ProductosService} from "../productos/productos.service";
import {Productos} from "../productos/productos";

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent implements OnInit {

  tecnistore: string = "TecniStore";

  pedido: Pedido[] = [];
  cliente: Cliente[] = [];
  detallepedido: Detallepedido[] = [];
  productos: Productos[] = [];

total: number =0;
  constructor(private pedidoService: PedidoService, private clienteService: ClienteService,
              private detallepedidoService: DetallepedidoService, public productosService: ProductosService) {
  }

  ngOnInit(): void {
    this.pedidoService.getPedido().subscribe(
      pedido => this.pedido = pedido
    )

    this.clienteService.getCliente().subscribe(
      cliente => this.cliente = cliente
    )

    this.detallepedidoService.getDetallePedido().subscribe(
      detallepedido => this.detallepedido = detallepedido
    )

    this.productosService.getProducto().subscribe(
      productos => this.productos = productos
    )

  }




}

/*
this.detallepedidoService.getDetallePedido().subscribe(
      e=>{
       this.total = e.reduce((acc,obj)=>acc+(obj.cantidad * obj.precioUnitario),0);
      }
    )



    this.total = this.detallepedido.reduce((acc, obj) => acc + (obj.cantidad * obj.precioUnitario), 0)
    this.total = this.detallepedidoService.getDetallePedido().reduce()

    this.detallepedidoService.getDetallePedido().subscribe(
      detallepedido => this.total= this.detallepedido.reduce( (acc,obj)=> acc + (obj.cantidad * obj.precioUnitario),0)
    )

*/
