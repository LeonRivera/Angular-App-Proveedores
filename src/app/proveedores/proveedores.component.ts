import { Component, OnInit } from '@angular/core';
import { Proveedor } from '../models/proveedor';
import { ProveedorService } from '../services/proveedor.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css'],
})
export class ProveedoresComponent implements OnInit {
  public proveedores: Proveedor[] = [];

  displayedColumns: string[] = [
    'RFC',
    'Razon Social',
    'Contacto',
    'Telefono',
    'Acciones',
  ];

  constructor(private proveedorService: ProveedorService) {}

  ngOnInit(): void {
    this.proveedorService.getProveedores().subscribe((p) => {
      this.proveedores = p;
    });
  }

  delete(proveedor: Proveedor): void {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger',
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: 'Esta seguro?',
        text: `Seguro que desea eliminar a ${proveedor.nombreContacto}`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          this.proveedorService.deleteByRfc(proveedor.rfc).subscribe((res) => {
            //filter the client that we eliminated and update the list
            this.proveedores = this.proveedores.filter((p) => p !== proveedor);

            swalWithBootstrapButtons.fire(
              'Eliminado!',
              `Se ha eliminado a ${proveedor.nombreContacto} correctamente`,
              'success'
            );
          });
        }
        // } else if (
        //   /* Read more about handling dismissals below */
        //   result.dismiss === Swal.DismissReason.cancel
        // ) {
        //   swalWithBootstrapButtons.fire(
        //     'Cancelled',
        //     'Your imaginary file is safe :)',
        //     'error'
        //   )
        // }
      });
  }
}
