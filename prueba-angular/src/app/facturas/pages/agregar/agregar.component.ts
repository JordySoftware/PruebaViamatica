import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { NavigationExtras, Router } from '@angular/router';
import { FacturaService } from '../../services/factura.service';
import { Factura } from '../../interfaces/factura.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  productoNuevo: FormGroup = new FormGroup({});


  constructor(private router: Router, private dialogRef: MatDialogRef<AgregarComponent>, private formBuilder: FormBuilder, private facturaService: FacturaService) {}


  ngOnInit() {
    this.productoNuevo = this.formBuilder.group({
        codigo: ['codigo', Validators.required],
        descripcion: ['descripcion', Validators.required],
        cant: ['cant', [Validators.required, Validators.min(1)]], 
        precio: ['precio', [Validators.required, Validators.min(0.01)]],
    });
  }

  onSubmit() {
    if (this.productoNuevo.valid) {
      const nuevoProducto = this.productoNuevo.value;
      this.facturaService.agregarProducto(nuevoProducto);
      this.productoNuevo.reset();
    }
    this.dialogRef.close(); 
    this.redirectToFactura();
  } 

  redirectToFactura() {
    this.router.navigate(['/factu']); // Redirige a la página de Factura
  }

  cancelar()
  {
    this.dialogRef.close(); 
  }
}
