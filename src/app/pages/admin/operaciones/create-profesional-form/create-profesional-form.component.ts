import { Component, OnInit } from '@angular/core';

import {
  faCoffee,
  faEdit,
  faTrashAlt,
  faSave,
} from '@fortawesome/free-solid-svg-icons';

import { ApiService } from './../../../../services/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-profesional-form',
  templateUrl: './create-profesional-form.component.html',
  styleUrls: ['./create-profesional-form.component.scss'],
})
export class CreateProfesionalFormComponent implements OnInit {
  //#region Variables

  //Parameters Modal
  sedes: any = [];
  profesionales: any;
  profesional: any;
  empresas: any = [];
  parametros: any = {};
  action: string = '';

  //form
  formData: FormData = new FormData();
  tituloFormulario: string = '';
  actionButton: string = '';

  //fontAwesome
  faCoffee = faCoffee;
  faEdit = faEdit;
  faTrashAlt = faTrashAlt;
  faSave = faSave;

  //Formulario
  form: FormGroup;

  //#endregion

  //#region Constructor
  constructor(private fb: FormBuilder, private apiService: ApiService) {
    this.form = this.fb.group({
      id: '0',
      idEmpresa: [null, Validators.required],
      idSede: [null, Validators.required],
      idProfesion: [null, Validators.required],
      Identificacion: [{ disabled: false, value: null }, Validators.required],
      Nombre: [null, Validators.required],
      Apellido: [null, Validators.required],
      estado: [true],
    });
  }
  //#endregion

  //#region CicleLife
  ngOnInit(): void {
    if (this.action === 'edit') {
      this.setDataToForm();
      this.tituloFormulario = 'Edición de un profesional';
      this.actionButton = 'Actualizar';
    } else {
      this.tituloFormulario = 'Creación de un profesional';
      this.actionButton = 'Guardar';
    }
    this.empresas = this.parametros.empresas;
    this.sedes = this.parametros.sedes;
    this.profesionales = this.parametros.profesiones;
  }
  //#endregion

  accionProfesionales() {
    if (!this.form.valid) {
      this.confirm();
      return;
    }

    switch (this.action) {
      case 'new':
        console.log(this.action);
        this.CreateProfesional();
        break;
      case 'edit':
        console.log(this.action);
        this.UpdateProfesional();
        break;
      default:
        break;
    }
  }

  //#region Form
  CreateProfesional() {
    this.setformData();
    this.apiService
      .create('createOperation', this.formData)
      .subscribe((resp) => {
        console.log(resp);
      });
  }

  UpdateProfesional() {
    console.log('');
    //this.setformData();
    this.setformData();
    if (!this.form.valid) {
      //alert(`Todos los campos son obligatorios`)
      this.confirm();
      return;
    }

    console.log('FormData', this.form.value);
    this.apiService
      .update('updateOperation', this.formData)
      .subscribe((resp) => {
        console.log(resp);
      });
  }

  setformData() {
    this.cleanDataForm();
    this.formData.append('id', this.form.get('id')?.value);
    this.formData.append('idEmpresa', this.form.get('idEmpresa')?.value);
    this.formData.append('idSede', this.form.get('idSede')?.value);
    this.formData.append('idProfesion', this.form.get('idProfesion')?.value);
    this.formData.append(
      'Identificacion',
      this.form.get('Identificacion')?.value
    );
    this.formData.append('Nombre', this.form.get('Nombre')?.value);
    this.formData.append('Apellido', this.form.get('Apellido')?.value);
    this.formData.append('estado', this.form.get('estado')?.value);
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];

    if (file) {
      this.formData.append('file', file, file.name);
    }
  }
  //#endregion

  //#region
  confirm() {
    Swal.fire({
      title: 'Revisar formulario',
      html: `¡Campos no procesados <strong></strong>!`,
      icon: 'warning',
      showCancelButton: false,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Ok',
      // inputValidator: (value) => {
      //   console.log(value.trim().length);
      //   return new Promise((resolve) => {
      //     if (value.trim().length !== 0 && !(value.trim().length < 10)) {
      //       resolve(null);
      //     } else {
      //       if (value.trim().length === 0) {
      //         resolve('La observación es obligatoria :)');
      //       } else if (value.trim().length < 10) {
      //         resolve('La observación debe contener al menos 10 caractares :)');
      //       }
      //     }
      //   });
      // },
    }).then((result) => {
      if (result.isConfirmed) {
        //this.deleteForm(id);
      } else if (result.isDismissed) {
      }
    });
  }

  //destructuring asigment
  public setDataToForm() {
    console.log(this.profesional);
    const {
      id,
      idSede,
      idProfesion,
      idEmpresa,
      Identificacion,
      Nombre,
      Apellido,
      rutaFirma,
      estado,
    } = this.profesional;
    this.form.patchValue({
      id: id,
      idSede: idSede,
      idProfesion: idProfesion,
      idEmpresa: idEmpresa,
      Identificacion: Identificacion,
      Nombre: Nombre,
      Apellido: Apellido,
      rutaFirma: rutaFirma,
      estado: estado,
    });
  }

  private cleanDataForm() {
    this.formData.delete('id');
    this.formData.delete('idEmpresa');
    this.formData.delete('idSede');
    this.formData.delete('idProfesion');
    this.formData.delete('Identificacion');
    this.formData.delete('Nombre');
    this.formData.delete('Apellido');
    this.formData.delete('rutaFirma');
    this.formData.delete('estado');
  }
  //#endregion
}
