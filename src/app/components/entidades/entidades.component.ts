import { Component } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { CrearEntidadComponent } from '../crear-entidad/crear-entidad.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-entidades',
  templateUrl: './entidades.component.html',
  styleUrls: ['./entidades.component.css'],
})
export class EntidadesComponent {
  displayedColumns: string[] = [
    'position',
    'nro_documento',
    'razon_social',
    'nombre_tipo_contribuyente',
    'nombre_comercial',
    'options',
  ];
  dataSource: any[] = [];

  constructor(private crudService: CrudService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.crudService.listarEntidades().subscribe(
      (response) => {
        this.dataSource = response;
      },
      (error) => {
        console.error('Error al listar entidades:', error);
      }
    );
  }

  abrirCrearEntidad(): void {
    const dialogRef = this.dialog.open(CrearEntidadComponent, {
      width: '47rem',
      data: {},
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }
}
