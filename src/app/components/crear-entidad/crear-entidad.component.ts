import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-crear-entidad',
  templateUrl: './crear-entidad.component.html',
  styleUrls: ['./crear-entidad.component.css'],
})
export class CrearEntidadComponent {
  entidadForm: FormGroup;
  lista_tipo_contribuyente: any[] = [];
  lista_tipo_documento: any[] = [];

  constructor(
    public dialogRef: MatDialogRef<CrearEntidadComponent>,
    private formBuilder: FormBuilder,
    private crudService: CrudService
  ) {
    this.entidadForm = this.formBuilder.group({
      id_entidad: Math.floor(Math.random() * (50 - 10 + 1)) + 10,
      id_tipo_documento: '',
      nro_documento: '',
      razon_social: '',
      nombre_comercial: '',
      id_tipo_contribuyente: '',
      direccion: '',
      telefono: '',
    });
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
    //console.log(this.entidadForm.value);
    if (this.entidadForm.valid) {
      const formData = this.entidadForm.value;
      this.crudService.crearEntidad(formData).subscribe(
        (response) => {
          console.log('Entidad creada correctamente', response);
          this.dialogRef.close();
          window.location.reload();
        },
        (error) => {
          console.error('Error al crear la entidad:', error);
        }
      );
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
