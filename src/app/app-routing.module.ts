import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormProveedoresComponent } from './form-proveedores/form-proveedores.component';
import { FormUsersComponent } from './form-users/form-users.component';
import { LoginComponent } from './login/login.component';
import { LogrouterComponent } from './logrouter/logrouter.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { ProvrouterComponent } from './provrouter/provrouter.component';

const routes: Routes = [
  // {path: '', component:ProveedoresComponent},
  {path: '', pathMatch: 'full', redirectTo:'lgr/Login'},
  {path: 'lgr',component: LogrouterComponent, children: [ 
    {path: 'Login', component: LoginComponent},
    {path: 'Register', component: FormUsersComponent}
  ]},
  {path: 'users/form', component: FormUsersComponent},
  {path: 'provrouter', component: ProvrouterComponent},
  {path: 'users/form/:username', component: FormUsersComponent},
  {path: 'proveedores', component:ProveedoresComponent},
  {path: 'proveedores/form', component:FormProveedoresComponent},
  {path: 'proveedores/form/:rfc', component:FormProveedoresComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
