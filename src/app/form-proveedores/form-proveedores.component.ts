import { Component, OnInit } from '@angular/core';
import { Estado } from '../models/estado';
import { Municipio } from '../models/municipio';
import { CodigoPostalService } from '../services/codigo-postal.service';

@Component({
  selector: 'app-form-proveedores',
  templateUrl: './form-proveedores.component.html',
  styleUrls: ['./form-proveedores.component.css']
})
export class FormProveedoresComponent implements OnInit {

  public estados:Estado[] = [];
  public municipios:Municipio[] = [];

  constructor(private codigoPostalService:CodigoPostalService) { }

  ngOnInit(): void {
    let estado = new Estado();
    this.codigoPostalService.findAllEstados().subscribe(
      e => {
        // estado.clave = e.cla
        // this.estados.push()
        console.log(e.respuesta.estados);

        this.estados = e.respuesta.estados;
      }
      
    )
  }

  showEstados(){
    console.log(this.estados);

    for(let e of this.estados){
      console.log(e.clave);
    }
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

}
