import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormProveedoresComponent } from './form-proveedores/form-proveedores.component';
import { CodigoPostalService } from './services/codigo-postal.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FormsModule } from '@angular/forms';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { FormUsersComponent } from './form-users/form-users.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { LogrouterComponent } from './logrouter/logrouter.component';

@NgModule({
  declarations: [
    AppComponent,
    FormProveedoresComponent,
    ProveedoresComponent,
    FormUsersComponent,
    LoginComponent,
    HeaderComponent,
    LogrouterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [CodigoPostalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
