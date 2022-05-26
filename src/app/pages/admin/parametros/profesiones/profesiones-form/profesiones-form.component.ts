import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

//Servicios

//Ngx Boostrap
import { BsModalRef } from 'ngx-bootstrap/modal';

//Prime Ng
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-profesiones-form',
  templateUrl: './profesiones-form.component.html',
  styleUrls: ['./profesiones-form.component.scss']
})
export class ProfesionesFormComponent implements OnInit {

//#region Variables
    form: FormGroup;
    action: number=0;
    profesion: any='';
    position: string='top';
  //#endregion

  constructor(
    private apiService: ApiService,
    public bsModalRef: BsModalRef,
  ) {
    //Creación formulario reactivo
    this.form=new FormGroup({
      descripcion: new FormControl(null,[Validators.required]),
      estado: new FormControl(null,[Validators.required])
    })
  }

  ngOnInit(): void {
    if (this.action===2){
      this.setDataToForm();
    }
  }

  //#region Formulario
  public grabarProfesion(){
    if(!this.form.valid){
      this.form.markAllAsTouched();
      //alert('Todos los campos son obligatorios');
      this.confirm();
      return
    }

    if (this.action === 1){
      console.log(`Entro aqui!!!`);

      this.apiService.create(this.form.value,'createProfesion').subscribe(response =>{
        //alert("Proceso creado satisfactoriamente");
        this.confirm();
      })
    }else{
        this.apiService.update(this.form.value,`updateProfesion?id=${this.profesion.id}`).subscribe(respones =>{
         //alert("Registro actualizado de manera satisfactoria");
         this.confirm();
        })
    }

    this.bsModalRef.hide()
  }
  //#endregion

  //destructuring asigment
  public setDataToForm(){
    this.form.patchValue({descripcion:this.profesion.description,estado:this.profesion.estado})
  }
  //#endregion

  //#region ConfirmDialog
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
  //#endregion

}
