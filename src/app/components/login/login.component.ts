import {Component, OnInit} from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RestapiService } from 'src/app/restapi.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

<<<<<<< Updated upstream
=======
  username!: string;
  password!: string;
  message:any;
>>>>>>> Stashed changes


  constructor(private service: RestapiService,private router:Router) {
  }

  ngOnInit(): void {
  }
<<<<<<< Updated upstream
=======

  doLogin(){
   let resp= this.service.login(this.username,this.password);
   resp.subscribe(data=>{
    this.message = data; 
    //console.log(data);
    this.router.navigate(["/dashboard"])
    Swal.fire('Administrador TecniStore', `Usuario TecniStoreAdmin Bienvenido`, 'success')
   });
  }
  
  
>>>>>>> Stashed changes
}


