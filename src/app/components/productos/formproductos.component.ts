import { Component, OnInit } from '@angular/core';
import {Productos} from "./productos";
import {ProductosService} from "./productos.service";
import {ActivatedRoute, Router} from "@angular/router";
import Swal from 'sweetalert2'
import {Categorias} from "../categorias/categorias";
import {CategoriasService} from "../categorias/categorias.service";

@Component({
  selector: 'app-formproductos',
  templateUrl: './formproductos.component.html'
})
export class FormproductosComponent implements OnInit {

  public productos: Productos = new Productos();

  categorias1 :Categorias[] = []

  constructor(private productosService:ProductosService, private router :Router, private activatedRoute:ActivatedRoute, private categoriasService :CategoriasService) { }

  ngOnInit(): void {
    this.cargar();
    this.categoriasService.getCategorias().subscribe(
      categorias1 => this.categorias1 =categorias1
    );

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

  Regresar() :void{
      this.router.navigate(['/producto'])
    }

}
