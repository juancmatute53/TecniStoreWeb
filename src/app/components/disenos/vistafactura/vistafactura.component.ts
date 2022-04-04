import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Cliente} from "../../cliente/cliente";
import {ClienteService} from "../../cliente/cliente.service";
import {SqlclienteService} from "../../extras/sqlcliente/sqlcliente.service";
import {Sqlcliente} from "../../extras/sqlcliente/sqlcliente";
import {Detallepedido} from "../../detallepedido/detallepedido";
import {Productos} from "../../productos/productos";
import {DetallepedidoService} from "../../detallepedido/detallepedido.service";
import {ProductosService} from "../../productos/productos.service";

@Component({
  selector: 'app-vistafactura',
  templateUrl: './vistafactura.component.html',
  styleUrls: ['./vistafactura.component.css']
})
export class VistafacturaComponent implements OnInit {

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
/*
  cargar(): void {
    this.activatedRoute.params.subscribe(
      e => {
        let id = e['id'];
        if (id) {
          this.productosService.getProductosId(id).subscribe(
            es => this.productos = es
          );
        }

      }
    );
  }*/


}
