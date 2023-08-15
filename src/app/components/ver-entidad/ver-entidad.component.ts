import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CrudService } from 'src/app/services/crud.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ver-entidad',
  templateUrl: './ver-entidad.component.html',
  styleUrls: ['./ver-entidad.component.css'],
})
export class VerEntidadComponent {
  entidadForm: FormGroup;
  lista_tipo_contribuyente: any[] = [];
  lista_tipo_documento: any[] = [];
  dataInicial: any;

  constructor(
    public dialogRef: MatDialogRef<VerEntidadComponent>,
    private formBuilder: FormBuilder,
    private crudService: CrudService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.entidadForm = this.formBuilder.group({
      id_entidad: '',
      id_tipo_documento: '',
      nro_documento: '',
      razon_social: '',
      nombre_comercial: '',
      id_tipo_contribuyente: '',
      direccion: '',
      telefono: '',
    });

    if (data && data.entidad) {
      this.entidadForm.patchValue(data.entidad);
      this.dataInicial = JSON.stringify(this.entidadForm.value);
    }
  }

  ngOnInit(): void {
    this.crudService.listarTipoContribuyente().subscribe(
      (response) => {
        this.lista_tipo_contribuyente = response;
      },
      (error) => {
        console.error('Error al listar tipo de contribuyente:', error);
      }
    );

    this.crudService.listarTipoDocumento().subscribe(
      (response) => {
        this.lista_tipo_documento = response;
      },
      (error) => {
        console.error('Error al listar tipo de documento:', error);
      }
    );
  }

  onSubmit(): void {
    const dataFinal = JSON.stringify(this.entidadForm.value);
    if (this.dataInicial === dataFinal) {
      console.log('No hubo cambios.');
      this.dialogRef.close();
    } else {
      console.log('Hubo cambios.');
      Swal.fire({
        title: '¿Estás seguro?',
        text: 'Se realizará la actualización de la entidad.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Actualizar',
        cancelButtonText: 'Cancelar',
      }).then((result) => {
        if (result.isConfirmed) {
          this.crudService.actualizarEntidad(dataFinal).subscribe(
            (response) => {
              console.log('Entidad actualizada correctamente', response);
              this.dialogRef.close();
              window.location.reload();
            },
            (error) => {
              console.error('Error al actualizar la entidad:', error);
            }
          );
        }
      });
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
