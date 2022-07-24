import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IProfesion } from 'src/app/models/profesiones.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-create-profesiones',
  templateUrl: './create-profesiones.component.html',
  styleUrls: ['./create-profesiones.component.scss']
})
export class CreateProfesionesComponent implements OnInit {

  //#region  VARIABLES
  form : FormGroup;
  nombreAccionBtn: string  = '';

  //variables del modal
  action : string;
  profesion: IProfesion;
  //#endregion

  //#region CONSTRUCTOR
  constructor(
    //inyección de dependencias
    private apiService : ApiService
  ) {
    this.form = new FormGroup({
      id: new FormControl(''),
      description : new FormControl('',[Validators.required,Validators.min(4),Validators.max(50)]),
      estado : new FormControl(true,[Validators.required])
    });
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(){
    switch (this.action){
      case "new":
        this.nombreAccionBtn='Guardar';
        break;
      case "edit":
        this.nombreAccionBtn='Actualizar';
        this.setFormulario();
        break;
    }
  }

  //#endregion


  //#region FORMULARIO
  // Asignación de un campo a un formulario
  private setFormulario() :void {
    //destructuring
    const {id,description,estado} = this.profesion;
    this.form.patchValue({
      id: id,
      description : description,
      estado : estado
    })
  }

  actiobBtn(){
    switch (this.action) {
      case 'new':
        this.createAction();
        break;
      case 'edit':
        this.updateAction();
        break;
      default:
        break;
    }
  }

  updateAction(){
    const dataForm : IProfesion = this.form.value;
    console.log(this.action);
    console.log("console update",dataForm);

    this.apiService.update(`updateProfesion/${dataForm.id}`,dataForm).subscribe(resp=>{
    console.log(resp);
    })
  }

  createAction(){
    const dataForm=this.form.value;
    this.apiService.create('createProfesion',dataForm).subscribe(resp=>{
      console.log(resp);
    })
  }

  //#endregion

}
