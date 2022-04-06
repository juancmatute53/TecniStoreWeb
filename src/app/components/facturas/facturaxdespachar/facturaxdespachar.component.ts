import {Component, OnInit} from '@angular/core';
import {Xdespachar} from "../../modelos/xdespachar/xdespachar";
import {Sqldetallespedidos} from "../../modelos/sqldetallespedidos/sqldetallespedidos";
import {SqldetallespedidosService} from "../../modelos/sqldetallespedidos/sqldetallespedidos.service";
import {XdespacharService} from "../../modelos/xdespachar/xdespachar.service";
import Swal from "sweetalert2";
import {PedidoService} from "../../modelos/pedido/pedido.service";
import {Pedido} from "../../modelos/pedido/pedido";
import {Router} from "@angular/router";

@Component({
  selector: 'app-facturaxdespachar',
  templateUrl: './facturaxdespachar.component.html',
  styleUrls: ['../facturas.component.css']
})
export class FacturaxdespacharComponent implements OnInit {

  tiendanombre: string = "TECNISTORE";
  xdespachar: Xdespachar[] = [];
  sqldetallespedidos: Sqldetallespedidos[] = []
  filterPost = '';

  public pedidoa: Pedido = new Pedido();

  constructor(private pedidoService: PedidoService, private router: Router, private xdespacharService: XdespacharService, private sqldetallespedidosService: SqldetallespedidosService) {
  }

  ngOnInit(): void {
    this.xdespacharService.getXdespachar().subscribe(
      detallepedido => this.xdespachar = detallepedido
    )

    this.sqldetallespedidosService.getDetallespedidos().subscribe(
      detallepedidos => this.sqldetallespedidos = detallepedidos
    )
  }

  Editar(id: number) {
    console.log(id)
    this.pedidoService.despacharPedidos(id, this.pedidoa).subscribe(
      x => {
        this.router.navigate(['/facturaxdespachada'])
        Swal.fire('Correcto', `Factura y productos enviados con Exito`, 'success')
        this.xdespacharService.getXdespachar().subscribe(
          detallepedido => this.xdespachar = detallepedido
        )
      }
    )
  }

}
