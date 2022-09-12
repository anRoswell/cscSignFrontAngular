import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  faSave, } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {
  [x: string]: any;

    //#region Variables
    usuario: any;

    //form
    formData: FormData = new FormData();

    //Formulario
    form: FormGroup;

    //fontAwesome
    faSave = faSave;

    //#endregion
  constructor(
    private fb: FormBuilder,
  ) {
    this.form = this.fb.group({
      id: '0',
      identificationTypeId: [null, Validators.required],
      profileId: [null, Validators.required],
      usr_cedula: [null, Validators.required],
      usr_direccion: [null, Validators.required],
      usr_email: [null, Validators.required],
      usr_nameComplete: [null,Validators.required],
      usr_nroCelular: [null, Validators.required],
      usr_telefonoFijo: [null, Validators.required],
      usr_status: [true, Validators.required],
    });
  }

  ngOnInit(): void {
  }

  CreateUser(){
    console.log('');
    this.setformData();

    console.log('FormData', this.form.value);
    this.apiService
      .update(`createUsers/${this.form.value.id}`, this.formData)
      .subscribe((resp) => {
        console.log(resp);
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

}
