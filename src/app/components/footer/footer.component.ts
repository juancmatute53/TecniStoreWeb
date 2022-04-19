import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['../nav-bar/nav-bar.component.css']
})
export class FooterComponent implements OnInit {

  nombre : string = "TECNISTORE"


  constructor() { }

  ngOnInit(): void {
  }

}
