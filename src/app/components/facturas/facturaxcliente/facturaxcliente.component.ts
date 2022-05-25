import { Component, OnInit } from '@angular/core';
import {Detallepedido} from "../../modelos/detallepedido/detallepedido";
import {Productos} from "../../modelos/productos/productos";
import {Sqlcliente} from "../../modelos/sqlcliente/sqlcliente";
import {ActivatedRoute} from "@angular/router";
import {SqlclienteService} from "../../modelos/sqlcliente/sqlcliente.service";
import {DetallepedidoService} from "../../modelos/detallepedido/detallepedido.service";
import {ProductosService} from "../../modelos/productos/productos.service";

@Component({
  selector: 'app-facturaxcliente',
  templateUrl: './facturaxcliente.component.html',
  styleUrls: ['./facturaxcliente.component.css']
})
export class FacturaxclienteComponent implements OnInit {


  tiendanombre : string ="TECNISTORE";
  ciudad : string ="Cuenca";
  estado : string ="EC";
  codpost : string ="010215";
  ruc : string ="0105995377001";
  correo : string ="hermosokawai@gmail.com";
  celular : string ="+(593) 939745892";
  ubicacion : string ="23-13 San Sebastian";



  detallepedido: Detallepedido[] = [];
  productos: Productos[] = [];


  public sqlcliente: Sqlcliente = new Sqlcliente();

  constructor(private activatedRoute: ActivatedRoute, private sqlclienteService: SqlclienteService,
              private  detallepedidoService :DetallepedidoService,  private  productosService :ProductosService,) { }

  ngOnInit(): void {
    this.cargarCliente();

    this.detallepedidoService.getDetallePedido().subscribe(
      detallepedido => this.detallepedido = detallepedido
    )
    this.productosService.getProducto().subscribe(
      productos => this.productos = productos
    )
  }

  cargarCliente():void{
    this.activatedRoute.params.subscribe(
      e=>{
        let id = e['id'];
        if (id){
          this.sqlclienteService.getSQlClienteId(id).subscribe(
            es => this.sqlcliente = es
          );
        }
      }
    )
  }
}
