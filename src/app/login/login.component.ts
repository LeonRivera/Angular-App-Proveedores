import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  links = ['proveedores/form', '', ''];

  username:string = "";
  password:string = "";

  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
  }

  login():void{
    console.log("autenticando");
    this.loginService.authenticate(this.username, this.password);
  }

}
