import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  faSave,
} from '@fortawesome/free-solid-svg-icons';
import { ApiService } from 'src/app/services/api.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

    //#region Variables
    usuario: any;

    //fontAwesome
    faSave = faSave;

    //Formulario
    form: FormGroup;

    user: any

    //#endregion

  constructor(
    private fb: FormBuilder,
    private storageService:StorageService,
    private apiService: ApiService
  ) {
    this.form = this.fb.group({
      id: '0',
      usr_email: [null, Validators.required],
      usr_password: [null, Validators.required],
      new_password: [null, Validators.required],
      rep_new_password: [null, Validators.required],
    });
  }

  async ngOnInit(): Promise<void> {
    this.user = await this.storageService.read('_user')
    //console.log(this.user)
    this.setDataToForm()
  }

  UpdateUser(){
     console.log('Form', this.form.value);
     if (this.form.get('new_password').value != this.form.get('rep_new_password').value){
        alert('Contraseñas no coinciden');
        return;
     }
    this.apiService
      .update(`passmbusers/${this.form.value.id}`, this.form.value)
      .subscribe((resp) => {
        console.log(resp);
      });
  }

  //#region formularios
  //destructuring asigment
  public setDataToForm() {
    //console.log(this.user);
    const { id, usr_email } = this.user.body;
    this.form.patchValue({
      id: id,
      usr_email: usr_email,
      usr_password: null,
      new_password: null,
      rep_new_password: null,
    });
  }
  //#endregion
}
