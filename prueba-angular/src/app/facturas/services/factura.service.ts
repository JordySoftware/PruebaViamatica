import { Injectable } from '@angular/core';
import { Factura } from '../interfaces/factura.interface';
import { Observable, of } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {

  private dataSource: MatTableDataSource<Factura>;
  private data: Factura[];

  constructor() {
    // Inicializa el dataSource con los datos existentes o vacíos
    this.data = [
      {
        codigo: 12345,
        descripcion: 'Producto1',
        cant: 1,
        precio: 99,
        total: 99
      },
      {
        codigo: 12345,
        descripcion: 'Producto2',
        cant: 1,
        precio: 99,
        total: 99
      }
    ];

    this.dataSource = new MatTableDataSource<Factura>(this.data);
  }

  getData(): MatTableDataSource<Factura> {
    return this.dataSource;
  }

  getDatos(): Factura[] {
    return this.data;
  }

  agregarProducto(nuevoProducto: Factura) {
    // Verifica si el producto ya existe en el arreglo data antes de agregarlo
    if (!this.data.some(producto => producto.codigo === nuevoProducto.codigo)) {
      this.data.push(nuevoProducto);
      this.dataSource.data.push(nuevoProducto);
      // Actualiza el dataSource para notificar a los componentes que utilizan esta fuente de datos
      this.dataSource.data = [...this.dataSource.data];
    }
  }
}
