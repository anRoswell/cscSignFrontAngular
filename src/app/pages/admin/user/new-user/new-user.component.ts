import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  faSave, } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

    //#region Variables
    usuario: any;

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

    console.log('FormData', this.form.value);
    // this.apiService
    //   .update(`createUsers/${this.form.value.id}`, this.formData)
    //   .subscribe((resp) => {
    //     console.log(resp);
    //   });
  }

}
