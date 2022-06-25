import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CodigoPostalService } from './services/codigo-postal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  	

    
  constructor(private codigoPostalService:CodigoPostalService){

  }

  ngOnInit(): void {
    this.codigoPostalService.findAllEstados()
    .subscribe(e => console.log(e));
  }


  title = 'app-proveedores';
}
