import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacturasComponent } from './facturas/pages/main/facturas.component';

const routes: Routes = [

  {
    path: 'factu',
    component: FacturasComponent
  },
  {
    path: '**',
    redirectTo: 'factu'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
