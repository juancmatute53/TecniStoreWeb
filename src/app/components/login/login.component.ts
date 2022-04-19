import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {RestapiService} from 'src/app/restapi.service';
import Swal from 'sweetalert2'
import {LoginService} from "../modelos/login/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: string = "";
  clave: string = "";


  constructor(private service: RestapiService, private router: Router, private loginService: LoginService) {
  }

  ngOnInit(): void {
  }

  iniciar() {
    const user = this.usuario;
    const password = this.clave
    this.loginService.getEntrada(user, password).subscribe(data => {
        if (data != null) {
          this.router.navigate(["/dashboard"])
          Swal.fire('Administrador TecniStore', `Usuario TecniStoreAdmin Bienvenido`, 'success')
        } else {
          Swal.fire('Algo salio mal ', `Ingrese sus credenciales`, 'error')
        }
      }
    )

  }

  /*
    doLogin() {
      let resp = this.service.login(this.username, this.password);
      resp.subscribe(data => {
        this.message = data;
        //console.log(data);
        this.router.navigate(["/dashboard"])
        Swal.fire('Administrador TecniStore', `Usuario TecniStoreAdmin Bienvenido`, 'success')
      });
    }*/
}
