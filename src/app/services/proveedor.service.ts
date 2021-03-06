import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';
import { Proveedor } from '../models/proveedor';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {


  private httpHeaders = new HttpHeaders({'Content-type':'application/json'});
  private devBaseUrl: string = "http://localhost:9069/proveedores";
  private devProdUrl: string = "https://firebase-u-api-lrv.herokuapp.com/proveedores";


  constructor(private httpClient:HttpClient,
    private router:Router) { }


  getProveedores():Observable<Proveedor[]>{
    return this.httpClient.get<Proveedor[]>(this.devProdUrl);
  }

  getProveedorByRfc(rfc:string):Observable<Proveedor>{
    return this.httpClient.get<Proveedor>(`${this.devProdUrl}/${rfc}`)
    .pipe(
      catchError(e => {
        return throwError(e);
      })
    );
  }

  create(proveedor:Proveedor):Observable<any>{
    return this.httpClient.post<Proveedor>(this.devProdUrl, proveedor)
    .pipe(
      catchError(e => {
        return throwError(e);
      })
    )
  }

  update(proveedor:Proveedor):Observable<any>{
    return this.httpClient.put<Proveedor>(this.devProdUrl, proveedor)
    .pipe(
      catchError(e => {
        return throwError(e);
      })
    )
  }

  deleteByRfc(rfc:string):Observable<any>{
    return this.httpClient.delete(`${this.devProdUrl}/${rfc}`)
    .pipe(
      catchError(e => {
        return throwError(e);
      })
    )
  }
}
