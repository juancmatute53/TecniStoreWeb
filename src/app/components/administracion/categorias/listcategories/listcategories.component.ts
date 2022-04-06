import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Categorias} from "../../../modelos/categorias/categorias";
import {CategoriasService} from "../../../modelos/categorias/categorias.service";

@Component({
  selector: 'app-listcategories',
  templateUrl: './listcategories.component.html'
})
export class ListcategoriesComponent implements OnInit {

  categorias: Categorias[] = [];
  filterPost: string ="";

  constructor(private categoriasService: CategoriasService) {
  }

  ngOnInit(): void {
    this.categoriasService.getCategorias().subscribe(
      categoria => this.categorias = categoria
    )
  }

}
