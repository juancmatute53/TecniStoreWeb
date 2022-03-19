import { Component, OnInit } from '@angular/core';
import {Productos} from "./productos";
import {ProductosService} from "./productos.service";
import {ActivatedRoute, Router} from "@angular/router";
import Swal from 'sweetalert2'

@Component({
  selector: 'app-formproductos',
  templateUrl: './formproductos.component.html'
})
export class FormproductosComponent implements OnInit {

  public productos: Productos = new Productos();

  constructor(private productosService:ProductosService, private router :Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.cargar();
  }

  public create(): void {

    console.log(this.productos)
    this.productosService.create(this.productos).subscribe(productos => {

        this.router.navigate(['/producto'])
        Swal.fire('Producto guardado', `Cliente ${productos.nombre} guardado con exito`, 'success')
      }
    )
  }

  Editar():void{
    console.log(this.productos
    )
    this.productosService.updateProductos(this.productos).subscribe(
      productos=>{
        this.router.navigate(['/producto'])
        Swal.fire('Producto modificado', `Cliente ${productos.nombre} guardado con exito`, 'success')
      }
    )

    /*
    localStorage.setItem("id",producto.idProducto.toString());
    this.router.navigate(["form"])
    /*producto:Productos*/
  }

  cargar():void{
    this.activatedRoute.params.subscribe(
      e=>{
        let id = e['id'];
        if(id){
          this.productosService.getProductosId(id).subscribe(
            es=> this.productos = es
          );
        }

      }
    );
  }
}
