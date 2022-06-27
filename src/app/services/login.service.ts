import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { User } from '../models/user';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private urlAuthenticate: string = 'http://localhost:9069/users/auth';
  private prodUrlAuthenticate: string = 'https://firebase-u-api-lrv.herokuapp.com/users/auth';

  static token: boolean = false;

  usuario: User = {
    username: "def",
    password: "",
    age: 0
  }

  constructor(private http: HttpClient,
    private router:Router) {}

    authenticate(username: string, password: string):void {
        this.usuario.username = username;
        this.usuario.password = password;
        console.log('***********SERVICIO**********');
        console.log(this.usuario.username);
        console.log(this.usuario.password);
    
        this.http
          .post<boolean>(this.prodUrlAuthenticate, this.usuario)
          .pipe(
            catchError(e => {
              console.log(e);
              Swal.fire('Error al autenticar', e.error.message, 'error');
              return throwError(e);
            }) 
          )
          .subscribe((response) => {
            console.log("setting token");
            LoginService.token = response;
            // console.log("navegando" + "," + this.token);
    
            if(response === true){
              sessionStorage.setItem('logged', 'true');
            }else{
              Swal.fire('Login', "usuario o contraseña incorrectos", 'error');
              sessionStorage.setItem('logged', 'false');
            }
    
            this.router.navigate(['provrouter']);
          });
    
        
          // console.log("login guardian token: "+this.token);
    
          
          
    
        // return this.http.post<boolean>(this.urlAuthenticate, this.usuario);
      }
    
      isAuth():boolean{
        return LoginService.token;
      }
    
      logout():void{
        console.log("logout user service");
        sessionStorage.setItem('logged', 'false');
        LoginService.token = false;
        this.router.navigate(['login']);
      }
}
