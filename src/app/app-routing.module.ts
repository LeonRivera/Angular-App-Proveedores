import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormProveedoresComponent } from './form-proveedores/form-proveedores.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';

const routes: Routes = [
  {path: '', component:ProveedoresComponent},
  {path: 'proveedores/form', component:FormProveedoresComponent},
  {path: 'proveedores/form/:rfc', component:FormProveedoresComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
