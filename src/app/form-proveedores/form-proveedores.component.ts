import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Estado } from '../models/estado';
import { Municipio } from '../models/municipio';
import { Proveedor } from '../models/proveedor';
import { CodigoPostalService } from '../services/codigo-postal.service';
import { ProveedorService } from '../services/proveedor.service';

@Component({
  selector: 'app-form-proveedores',
  templateUrl: './form-proveedores.component.html',
  styleUrls: ['./form-proveedores.component.css'],
})
export class FormProveedoresComponent implements OnInit {
  public estados: Estado[] = [];
  public municipios: Municipio[] = [];
  public proveedor: Proveedor = new Proveedor();
  public updatingProveedor: boolean = false;

  constructor(
    private codigoPostalService: CodigoPostalService,
    private proveedorService: ProveedorService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.updatingProveedor = this.loadRouteDataParam();

    let estado = new Estado();
    this.codigoPostalService.findAllEstados().subscribe((e) => {
      // console.log(e.respuesta.estados);
      this.estados = e.respuesta.estados;
    });

    // Mandar a llamar al municipio tambien
    // if(this.updatingProveedor){
    //   this.clickEstadosSelect(this.proveedor.)
    // }
  }
  clickEstadosSelect(claveEstado: string) {
    // console.log(claveEstado);

    this.codigoPostalService
      .getMunicipiosByEstado(claveEstado)
      .subscribe((e) => {
        console.log(e);
        this.municipios = e.respuesta.municipios;
      });
  }

  save(): void {
    console.log('saving...' + this.proveedor.toString());
    this.proveedorService.create(this.proveedor).subscribe((response) => {
      console.log(response);
    });
  }

  update(): void {
    this.proveedorService.update(this.proveedor).subscribe((r) => {
      console.log(r);
      this.router.navigate(['provrouter']);
    });
  }

  public loadRouteDataParam(): boolean {
    console.log('cargando route param');
    let rfc = '';
    this.activatedRoute.params.subscribe((params) => {
      rfc = params['rfc'];

      console.log(rfc);
      if (rfc) {
        this.proveedorService
          .getProveedorByRfc(rfc)
          .subscribe((p) => (this.proveedor = p));
        console.log('1');
      } else {
        console.log('2');
      }
    });

    console.log(rfc);
    if (rfc === undefined) {
      console.log('3');
      return false;
    } else {
      console.log('4');
      return true;
    }
  }
}
