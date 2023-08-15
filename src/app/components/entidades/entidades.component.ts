import { Component, ViewChild } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { CrearEntidadComponent } from '../crear-entidad/crear-entidad.component';
import { MatDialog } from '@angular/material/dialog';
import { VerEntidadComponent } from '../ver-entidad/ver-entidad.component';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import Swal from 'sweetalert2';

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

  abrirVerEntidad(data: any): void {
    const dialogRef = this.dialog.open(VerEntidadComponent, {
      width: '47rem',
      data: { entidad: data },
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }

  eliminarEntidad(id_entidad: number): void {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta acción no se puede deshacer.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.crudService.eliminarEntidad(id_entidad).subscribe(
          (response) => {
            Swal.fire(
              'Eliminado',
              'La entidad ha sido eliminada.',
              'success'
            ).then(() => {
              window.location.reload(); // Recargar la página
            });
          },
          (error) => {
            Swal.fire('Error', 'No se pudo eliminar la entidad.', 'error');
          }
        );
      }
    });
  }
}
