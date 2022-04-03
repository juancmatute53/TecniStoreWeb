import {Component, OnInit} from '@angular/core';
import {PedidoService} from "../pedido/pedido.service";
import {Pedido} from "../pedido/pedido";
import {ClienteService} from "../cliente/cliente.service";
import {Cliente} from "../cliente/cliente";
import {Detallepedido} from "../detallepedido/detallepedido";
import {DetallepedidoService} from "../detallepedido/detallepedido.service";
import {ProductosService} from "../productos/productos.service";
import {Productos} from "../productos/productos";
import {Router} from "@angular/router";
import Swal from 'sweetalert2';

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

  public pedidoa: Pedido = new Pedido();

  total: number =0;
  contador: number = 0;

  constructor(private pedidoService: PedidoService, private clienteService: ClienteService,
              private  detallepedidoService :DetallepedidoService,  private  productosService :ProductosService,
              private router: Router) {

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

    this.detallepedidoService.getDetallePedido().subscribe(
      e=>{
        this.total = e.reduce((acc,obj)=>acc+(obj.cantidad * obj.precioUnitario),0);
      }
    )
  }

  Editar(id:number){
    console.log(id)
    this.pedidoService.despacharPedidos(id,this.pedidoa).subscribe(
      x=>
      {
        this.router.navigate(['/facturas'])
        Swal.fire('Correcto', `Factura y productos enviados con Exito`, 'success')
      }
    )
  }

  /*
  Editar(): void {
    console.log(this.productos
    )
    this.productosService.updateProductos(this.productos).subscribe(
      productos => {
        this.router.navigate(['/producto'])
        Swal.fire('Producto modificado', `Producto ${productos.nombre} modificado con exito`, 'success')
      }
    )
  }
   */

}
