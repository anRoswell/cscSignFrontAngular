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

  UpdateUser(){
      console.log('');
      this.setformData();
      // if (!this.form.valid) {
      //   //alert(`Todos los campos son obligatorios`)
      //   this.confirm();
      //   return;
      // }

      console.log('FormData', this.form.value);
      this.apiService
        .update(`updateUsers/${this.form.value.id}`, this.formData)
        .subscribe((resp) => {
          console.log(resp);
        });
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

  setformData() {
    this.cleanDataForm();
    this.formData.append('id', this.form.get('id')?.value);
    this.formData.append('identificationTypeId', this.form.get('identificationTypeId')?.value);
    this.formData.append('profileId', this.form.get('profileId')?.value);
    this.formData.append('usr_cedula', this.form.get('usr_cedula')?.value);
    this.formData.append('usr_direccion',this.form.get('usr_direccion')?.value);
    this.formData.append('usr_email', this.form.get('usr_email')?.value);
    this.formData.append('usr_nameComplete', this.form.get('usr_nameComplete')?.value);
    this.formData.append('usr_nroCelular', this.form.get('usr_nroCelular')?.value);
    this.formData.append('usr_telefonoFijo', this.form.get('usr_telefonoFijo')?.value);
    this.formData.append('usr_status', this.form.get('usr_status')?.value);
  }

  private cleanDataForm() {
    this.formData.delete('id');
    this.formData.delete('identificationTypeId');
    this.formData.delete('profileId');
    this.formData.delete('usr_cedula');
    this.formData.delete('usr_direccion');
    this.formData.delete('usr_email');
    this.formData.delete('usr_nameComplete');
    this.formData.delete('usr_nroCelular');
    this.formData.delete('usr_telefonoFijo');
    this.formData.delete('usr_status');
  }
  //#endregion

}
