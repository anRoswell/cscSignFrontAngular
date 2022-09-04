import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  faSave,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

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
    private fb: FormBuilder,
  ) {
    this.form = this.fb.group({
      id: '0',
      usr_email: [null, Validators.required],
      usr_password: [null, Validators.required],
      new_password: [null, Validators.required],
      rep_new_password: [null, Validators.required],
    });
  }

  ngOnInit(): void {
  }

  UpdateUser(){
    this.setformData();

    // if (this.usuario.new_password != this.usuario.rep_new_password){
    //     alert('Pasword nuevo no coincide con redigitado')
    // }
    // if (!this.form.valid) {
    //   //alert(`Todos los campos son obligatorios`)
    //   this.confirm();
    //   return;
    // }

     console.log('FormData', this.form.value);
    // this.apiService
    //   .update(`updateUsers/${this.form.value.id}`, this.formData)
    //   .subscribe((resp) => {
    //     console.log(resp);
    //   });
  }

  //#region formularios
  //destructuring asigment
  public setDataToForm() {
    console.log(this.usuario);
    const { id, usr_email, usr_password, new_password, rep_new_password } = this.usuario.body;
    this.form.patchValue({
      id: id,
      usr_email: usr_email,
      usr_password: usr_password,
      new_password: new_password,
      rep_new_password: rep_new_password,
    });
  }

  setformData() {
    this.cleanDataForm();
    this.formData.append('id', this.form.get('id')?.value);
    this.formData.append('usr_email', this.form.get('usr_email')?.value);
    this.formData.append('usr_password', this.form.get('usr_password')?.value);
    this.formData.append('new_password', this.form.get('new_password')?.value);
    this.formData.append('rep_new_password',this.form.get('rep_new_password')?.value);
  }

  private cleanDataForm() {
    this.formData.delete('id');
    this.formData.delete('usr_email');
    this.formData.delete('usr_password');
    this.formData.delete('new_password');
    this.formData.delete('rep_new_password');
  }
  //#endregion
}
