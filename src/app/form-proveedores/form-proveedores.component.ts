import { Component, OnInit } from '@angular/core';
import { Estado } from '../models/estado';
import { Municipio } from '../models/municipio';
import { Proveedor } from '../models/proveedor';
import { CodigoPostalService } from '../services/codigo-postal.service';
import { ProveedorService } from '../services/proveedor.service';

@Component({
  selector: 'app-form-proveedores',
  templateUrl: './form-proveedores.component.html',
  styleUrls: ['./form-proveedores.component.css']
})
export class FormProveedoresComponent implements OnInit {

  public estados:Estado[] = [];
  public municipios:Municipio[] = [];

  public proveedor:Proveedor = new Proveedor();

  constructor(private codigoPostalService:CodigoPostalService,
    private proveedorService:ProveedorService) { }

  ngOnInit(): void {
    let estado = new Estado();
    this.codigoPostalService.findAllEstados().subscribe(
      e => {
        // console.log(e.respuesta.estados);
        this.estados = e.respuesta.estados;
      }
    )
  }
  clickEstadosSelect(claveEstado:string){
    console.log(claveEstado);
    this.codigoPostalService.getMunicipiosByEstado(claveEstado).subscribe(
      e => {
        console.log(e);
        this.municipios = e.respuesta.municipios;
      }
    )
  }

  save():void{
    console.log("saving..."+this.proveedor.toString());

    this.proveedorService.create(this.proveedor).subscribe(
      response => {
        console.log(response)
      }
    )
  }



}
