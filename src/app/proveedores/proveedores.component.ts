import { Component, OnInit } from '@angular/core';
import { Proveedor } from '../models/proveedor';
import { ProveedorService } from '../services/proveedor.service';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {

  public proveedores:Proveedor[] = [];

  displayedColumns: string[] = ["RFC", "Razon Social", 
  "Contacto", "Telefono"]

  constructor(private proveedorService:ProveedorService) { }

  ngOnInit(): void {
    this.proveedorService.getProveedores().subscribe(
      p => {
        this.proveedores = p;
      }
    )
  }

}
