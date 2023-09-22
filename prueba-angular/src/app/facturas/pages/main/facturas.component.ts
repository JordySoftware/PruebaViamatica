import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { Factura } from '../../interfaces/factura.interface';
import { FacturaService } from '../../services/factura.service';
import { AgregarComponent } from '../agregar/agregar.component';


@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.component.html',
  styleUrls: ['./facturas.component.css']
})
export class FacturasComponent implements OnInit{
  
  
  displayedColumns: string[] = ['codigo', 'descripcion', 'cant', 'precio', 'total'];
  dataSource = new MatTableDataSource<Factura>();
  total: number = 0;
  tot: number = 0;

  constructor(private facturaService: FacturaService, private dialog: MatDialog) {}

  ngOnInit() {
    // Obtén los datos del dataSource directamente desde el servicio
    this.dataSource = this.facturaService.getData();

    // Obtén los datos como arreglo
    const datos: Factura[] = this.facturaService.getDatos();

    
  }

  openDialogAgregar() {
    this.dialog.open(AgregarComponent, {
    });


  this.dataSource = this.facturaService.getData();
  const datos: Factura[] = this.facturaService.getDatos();
  this.total = this.calcularTotal(datos);
  }


  calcular(element: any): number {
    // Realiza el cálculo multiplicando la cantidad (cant) por el precio (precio)
    return element.cant * element.precio;
  }

  calcularTotal(datos: Factura[]): number {
    // Implementa la lógica para calcular el total a partir de los datos como arreglo
    let total = 0;
    for (const factura of datos) {
      total += factura.total;
    }
    return total;
}
}
