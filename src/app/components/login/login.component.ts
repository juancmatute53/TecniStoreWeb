import {Component, OnInit} from '@angular/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials={
    usuario:'',
    clave:''
  }

  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit(){
    //console.log("form in submitted");

    if((this.credentials.usuario!='' && this.credentials.clave!='')&& (this.credentials.usuario!=null && this.credentials.clave!=null))
    {
      console.log("WE have to submit the form to server");
    }else{
      console.log("Fields are empty !!");
    }
  }
}

  /*
  public login: Login = new Login();
enterAccount(){
    const login = {idUsuario:this.login.idUsuario, tipoUsuario:this.login.tipoUsuario , usuario: this.login.usuario, clave: this.login.clave}
    console.log(login)

    this.loginService.loginByUser(login).subscribe(
      data=>{
        console.log(data)
      }
    )
  }
  private loginService:LoginService




  loginForm= new FormGroup({
    usuario: new FormControl('',Validators.required),
    clave: new FormControl('',Validators.required)
  })



  onLogin(form:User){
    console.log(form)
    this.loginService.loginByUser(form).subscribe(
      data=>{
        console.log(data)
      }
    );
  }

  public access():void {
    console.log("entramos al metodo")
    console.log(this.login)
  }

    //logins: Login[] = [];

   public
  constructor() {
  }

  ngOnInit(): void {
  }*/



