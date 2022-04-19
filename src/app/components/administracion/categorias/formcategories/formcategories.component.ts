import {Component, OnInit} from '@angular/core';
import {Categorias} from "../../../modelos/categorias/categorias";
import {ActivatedRoute, Router} from "@angular/router";
import {CategoriasService} from "../../../modelos/categorias/categorias.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-formcategories',
  templateUrl: './formcategories.component.html'
})
export class FormcategoriesComponent implements OnInit {

  public categorias: Categorias = new Categorias();

  constructor(private categoriasService: CategoriasService, private router: Router, private activatedRoute: ActivatedRoute,) {
  }

  ngOnInit(): void {
    this.cargar()
  }


  Crear(): void {
    if (this.categorias.nombre == "" && this.categorias.fotoUrl == "") {
      this.categoriasService.createCategoria(this.categorias).subscribe(categorias => {
        Swal.fire('Categoria Creada ', `Categoria: ${categorias.nombre}, creada con exito`, 'success')
        this.router.navigate(['/categorias'])
        window.location.reload()
      })
    } else {
      Swal.fire('Campos vacios', `rellene todos los campos porfavor`, 'error')
    }
    /*
    this.categoriasService.createCategoria(this.categorias).subscribe(categorias => {
      Swal.fire('Categoria Creada ', `Categoria: ${categorias.nombre}, creada con exito`, 'success')
      this.router.navigate(['/categorias'])
      window.location.reload()
    })*/

  }

  cargar(): void {
    this.activatedRoute.params.subscribe(
      e => {
        let id = e['id'];
        if (id) {
          this.categoriasService.getCategoriasId(id).subscribe(
            es => this.categorias = es
          );
        }

      }
    );
  }

  Editar(): void {

    this.categoriasService.updateCategorias(this.categorias).subscribe(
      productos => {
        Swal.fire('Categoria modificada', `categoria: ${productos.nombre}, modificada con exito`, 'success')
        this.router.navigate(['/categorias'])
      }
    )
  }

  Regresar(): void {
    this.router.navigate(['/categorias'])
  }


}
