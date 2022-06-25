import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CodigoPostalService {


private httpHeaders = new HttpHeaders({'Access-Control-Allow-Origin': '*'});





  constructor(private httpCliente:HttpClient) {
   }


  // baseUrl:string = "https://apicp.softfortoday.com/";
  baseUrl:string = "/apipostal/";

  estadosUrl:string = "api/v1/estados/";
  municipiosUrl:string = "api/v1/municipios/"
  codigoPostalUrl:string = "api/v1/codigos_postales/"


  //Solucionado con pathRewrite
  findAllEstados():Observable<any>{
    return this.httpCliente
            .get<any>(`${this.baseUrl}${this.estadosUrl}`)
            .pipe(
              catchError(e => {
                return throwError(e);
              })
            );
  }
  getMunicipiosByEstado(claveEstado:string):Observable<any>{
    return this.httpCliente.get<any>(`${this.baseUrl}${this.municipiosUrl}${claveEstado}`)
    .pipe(
      catchError(e => {
        return throwError(e);
      })
    );
  }

  getAllByCodigoPostal(codigo:string){
    this.httpCliente.get(`${this.baseUrl}${this.codigoPostalUrl}${codigo}`);
  }


}
