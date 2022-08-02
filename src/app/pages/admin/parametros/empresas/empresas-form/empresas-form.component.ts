import { Component, OnInit } from '@angular/core';

//Font_Awesome
import {
  faSave,
} from '@fortawesome/free-solid-svg-icons';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Iempresas } from 'src/app/models/empresas.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-empresas-form',
  templateUrl: './empresas-form.component.html',
  styleUrls: ['./empresas-form.component.scss']
})
export class EmpresasFormComponent implements OnInit {
  //#region  VARIABLES
  form: FormGroup;
  nombreAccionBtn: string = '';
  nombreForm: string = '';

  //variables del modal
  action: string;
  empresas: Iempresas;

   //fontAwesome
   faSave =  faSave;
  //#endregion

  constructor(
    private apiService: ApiService
  ) {
    this.form = new FormGroup({
      id: new FormControl(''),
      nit: new FormControl('',[
        Validators.required,
      ]),
      nombre: new FormControl('', [
        Validators.required,
        Validators.min(4),
        Validators.max(50),
      ]),
      estado: new FormControl(true, [Validators.required]),
    });

    console.log(this.action);
    console.log(this.empresas);
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    switch (this.action) {
      case 'new':
        this.nombreForm = 'Creación Empresa'
        this.nombreAccionBtn = 'Guardar';
        break;
      case 'edit':
        this.nombreForm = 'Actualizar Empresas'
        this.nombreAccionBtn = 'Actualizar';
        this.setFormulario();
        break;
    }
  }

  // Asignación de un campo a un formulario
  private setFormulario(): void {
    //destructuring
    const { id, nit, nombre, estado } = this.empresas;
    this.form.patchValue({
      id: id,
      nit: nit,
      nombre: nombre,
      estado: estado,
    });
  }

  actiobBtn() {
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

  createAction() {
    const dataForm = this.form.value;
    console.log('Creando empresa',dataForm);
    this.apiService.create('createEmpresa', dataForm).subscribe((resp) => {
      console.log(resp);
    });
  }

  updateAction() {
    const dataForm: Iempresas = this.form.value;
    console.log(this.action);
    console.log('console update', dataForm);

    this.apiService
      .update(`updateEmpresa/${dataForm.id}`, dataForm)
      .subscribe((resp) => {
        console.log(resp);
      });
  }

}
