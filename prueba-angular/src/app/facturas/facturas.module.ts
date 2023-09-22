import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacturasComponent } from './pages/main/facturas.component';
import { MaterialModule } from '../material/material.module';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [
    FacturasComponent,
    AgregarComponent
  ],
  imports: [
    CommonModule, 
    MaterialModule,
    MatInputModule
  ]
})
export class FacturasModule { }
