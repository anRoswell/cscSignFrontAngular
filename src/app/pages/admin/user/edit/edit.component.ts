import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { StorageService } from '../../../../services/storage.service';
import {
  faSave,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {


  //#region Variables
  usuario: any;

  //form
  formData: FormData = new FormData();

  //fontAwesome
  faSave = faSave;

  //Formulario
  form: FormGroup;

  //#endregion

  constructor(
    private serviceStorage : StorageService,
    private fb: FormBuilder,
    private apiService: ApiService,
  ) {
    this.form = this.fb.group({
      id: '0',
      identificationTypeId: [null, Validators.required],
      profileId: [null, Validators.required],
      usr_cedula: [null, Validators.required],
      usr_direccion: [{ value: null }, Validators.required],
      usr_email: [null, Validators.required],
      usr_nameComplete: [Validators.required],
      usr_nroCelular: [null, Validators.required],
      usr_telefonoFijo: [null, Validators.required],
      usr_status: [true, Validators.required],
    });
  }

  ngOnInit(): void {
    this.usuario = this.serviceStorage.read('_user')
    console.log (this.usuario.body)
    this.setDataToForm();
  }

  accionActualizar(){
    console.log('Hola')
  }

  onFileSelected(){
    console.log('Hola')
  }
  //#region formularios
   //destructuring asigment
   public setDataToForm() {
    console.log(this.usuario);
    const { id, identificationTypeId, profileId, usr_cedula, usr_direccion, usr_email, usr_nameComplete, usr_nroCelular, usr_telefonoFijo, usr_status } = this.usuario.body;
    this.form.patchValue({
      id: id,
      identificationTypeId: identificationTypeId,
      profileId: profileId,
      usr_cedula: usr_cedula,
      usr_direccion: usr_direccion,
      usr_email: usr_email,
      usr_nameComplete: usr_nameComplete,
      usr_nroCelular: usr_nroCelular,
      usr_telefonoFijo: usr_telefonoFijo,
      usr_status: usr_status,
    });
  }
  //#endregion

}
