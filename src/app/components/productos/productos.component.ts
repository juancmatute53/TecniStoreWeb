import {Component, OnInit} from '@angular/core';
import {Productos} from "./productos";
import {VistaproductosService} from "../extras/vistaproductos/vistaproductos.service";
import Swal from 'sweetalert2';
import {ProductosService} from "./productos.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  public productos: Productos = new Productos();

  productos1: Productos[] = [];
  filterPost = '';

  id: number = 0;

  constructor(public vistaproductosService: VistaproductosService, public productosService: ProductosService,
              private router: Router, private activatedRoute: ActivatedRoute,) {
  }

  ngOnInit(): void {
    this.vistaproductosService.getProducto().subscribe(
      productos1 => this.productos1 = productos1
    );
  }

  eliminar(): void {
    Swal.fire('Producto', ` ocultado con exito`, 'success')
    this.router.navigate(['/producto'])
    this.productosService.deleteProductoId(this.productos).subscribe(
      x => {
        this.productosService.getProducto().subscribe(
          rp => this.productos1 = rp
        )
      }
    )
  }


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


}
