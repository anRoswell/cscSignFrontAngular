import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { controllers } from 'chart.js';
import { IProfesion } from 'src/app/models/profesiones.model';

@Component({
  selector: 'app-create-profesiones',
  templateUrl: './create-profesiones.component.html',
  styleUrls: ['./create-profesiones.component.scss']
})
export class CreateProfesionesComponent implements OnInit {

  //#region  VARIABLES
  form : FormGroup;

  //variables del modal
  action : string;
  profesion: IProfesion;
  //#endregion

  //#region CONSTRUCTOR
  constructor() {
    this.form = new FormGroup({
      description : new FormControl('',[Validators.required,Validators.min(4),Validators.max(50)]),
      estado : new FormControl(true,[Validators.required])
    });
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(){
    console.log(this.action);
    console.log(this.profesion);
    switch (this.action){
      case "new":
        break;
      case "edit":
        this.setFormulario();
        break;
    }
  }

  //#endregion


  //#region FORMULARIO
  // Asignación de un campo a un formulario
  private setFormulario() :void {
    this.form.patchValue({
      description : 'carlos andres',
      estado : false
    })
  }


  //#endregion

}
