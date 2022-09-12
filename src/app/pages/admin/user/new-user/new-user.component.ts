import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  faSave, } from '@fortawesome/free-solid-svg-icons';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  //#region Variables
  usuario: any;
  action = 'new';

  //Formulario
  form: FormGroup;

  //fontAwesome
  faSave = faSave;

  //#endregion    

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService
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

  ngAfterContentInit(){
    switch (this.action) {
      case 'edit':
        this.setDataForm()
        break;    
      default:
        break;
    }
  }

  CreateUser(){
    if (!this.form.valid) {
      alert("Todos los campos son obligatorios")
      return
    }
    
    console.log('Form: ', this.form.value);
    this.apiService
      .create(`createUsers`, this.form.value)
      .subscribe((resp) => {
        console.log(resp);
      });
  }

  setDataForm(){
    const {id, identificationTypeId, profileId, usr_cedula, usr_direccion, usr_email, usr_nameComplete, usr_nroCelular, usr_telefonoFijo, usr_status} = this.usuario
    this.form.pathValue({
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
    })
  }

}
