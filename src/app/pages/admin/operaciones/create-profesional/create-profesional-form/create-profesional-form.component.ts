import { Component, OnInit } from '@angular/core';

import { faCoffee, faEdit, faTrashAlt , faSave} from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ApiService } from '../../../../../services/api.service'

import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-profesional-form',
  templateUrl: './create-profesional-form.component.html',
  styleUrls: ['./create-profesional-form.component.scss']
})
export class CreateProfesionalFormComponent implements OnInit {
 //#region Variables

  //Parameters Modal
  sedes: any
  profesionales: any
  profesional: any
  empresas: any
  parametros: any = {}
  action: number=0

  //form
  formData = new FormData

  //fontAwesome
  faCoffee=faCoffee
  faEdit=faEdit
  faTrashAlt=faTrashAlt
  faSave=faSave

  //Formulario
  form:FormGroup

  //#endregion
  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
  ) {
    this.form = this.fb.group({
      idEmpresa:[null, Validators.required],
      idSede: [null, Validators.required],
      idProfesion: [null, Validators.required],
      Identificacion: [{disabled: true, value: null}, Validators.required],
      Nombre: [null, Validators.required],
      Apellido: [null, Validators.required],
      rutaFirma: ['null'],
      estado: [true],
    })
  }

  ngOnInit(): void {
    if (this.action===2){
      //this.setDataToForm();
    }
    console.log('Parametros', this.parametros)
    this.empresas = this.parametros.empresas;
    this.sedes = this.parametros.sedes;
    this.profesionales = this.parametros.profesiones;
    this.setDataToForm()
  }

  //#region Form
  UpdateForm(){
    if (!this.form.valid) {
      //alert(`Todos los campos son obligatorios`)
      this.confirm()
      return
    }
    this.formData.append('id',this.profesional.id)
    this.formData.append('idEmpresa',this.form.get('idEmpresa')?.value)
    this.formData.append('idSede',this.form.get('idSede')?.value)
    this.formData.append('idProfesion',this.form.get('idProfesion')?.value)
    this.formData.append('Identificacion',this.form.get('Identificacion')?.value)
    this.formData.append('Nombre',this.form.get('Nombre')?.value)
    this.formData.append('Apellido',this.form.get('Apellido')?.value)
    this.formData.append('rutaFirma',this.form.get('rutaFirma')?.value)
    this.formData.append('estado',this.form.get('estado')?.value)


    console.log('FormData',this.form.value);
    // this.apiService.update(this.formData, 'updateOperation').subscribe((resp)=>{
    //   console.log(resp);
    // })
  }

  onFileSelected(event: any) {
    const file:File = event.target.files[0];

    if (file) {
        this.formData.append("file", file, file.name);
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
  public setDataToForm(){
    this.form.patchValue({
      idSede: this.profesional.idSede,
      idProfesion: this.profesional.idProfesion,
      idEmpresa: this.profesional.idEmpresa,
      Identificacion: this.profesional.Identificacion,
      Nombre: this.profesional.Nombre,
      Apellido: this.profesional.Apellido,
      rutaFirma: this.profesional.rutaFirma,
      estado: this.profesional.estado
      })
  }
  //#endregion

}
