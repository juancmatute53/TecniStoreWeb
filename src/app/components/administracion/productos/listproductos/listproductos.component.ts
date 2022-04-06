import { Component, OnInit } from '@angular/core';
import {Vistaproductos} from "../../../modelos/vistaproductos/vistaproductos";
import {VistaproductosService} from "../../../modelos/vistaproductos/vistaproductos.service";

@Component({
  selector: 'app-listproductos',
  templateUrl: './listproductos.component.html'
})
export class ListproductosComponent implements OnInit {

  filterPost = '';
  vistaproductos :Vistaproductos[] = [];

  constructor(public vistaproductosService: VistaproductosService) { }

  ngOnInit(): void {
    this.vistaproductosService .getProducto().subscribe(
      productos1 => this.vistaproductos = productos1
    );
  }

}
