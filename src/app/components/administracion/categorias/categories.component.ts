import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['../../facturas/facturas.component.css']
})
export class CategoriesComponent implements OnInit {

  listarcategorias: string = "LISTAR CATEGORIAS";
  crearoeditar: string = "CREAR O EDITAR CATEGORIAS";


  constructor() {
  }

  ngOnInit(): void {
  }

}
