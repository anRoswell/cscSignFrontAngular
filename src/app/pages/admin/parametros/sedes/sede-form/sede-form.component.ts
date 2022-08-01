import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Isedes } from 'src/app/models/sedes.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-sede-form',
  templateUrl: './sede-form.component.html',
  styleUrls: ['./sede-form.component.scss']
})
export class SedeFormComponent implements OnInit {

       //#region  VARIABLES
       form: FormGroup;
       nombreAccionBtn: string = '';
       nombreForm: string = '';

       //variables del modal
       action: string;
       sede: Isedes;
       //#endregion
  constructor(
    //inyección de dependencias
    private apiService: ApiService
  ) {
    this.form = new FormGroup({
      id: new FormControl(''),
      description: new FormControl('', [
        Validators.required,
        Validators.min(4),
        Validators.max(50),
      ]),
      estado: new FormControl(true, [Validators.required]),
    });

    console.log(this.action);
    console.log(this.sede);
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    switch (this.action) {
      case 'new':
        this.nombreForm = 'Creación sedes'
        this.nombreAccionBtn = 'Guardar';
        break;
      case 'edit':
        this.nombreForm = 'Actualizar sedes'
        this.nombreAccionBtn = 'Actualizar';
        this.setFormulario();
        break;
    }
  }

  // Asignación de un campo a un formulario
  private setFormulario(): void {
    //destructuring
    const { id, description, estado } = this.sede;
    this.form.patchValue({
      id: id,
      description: description,
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
    console.log('Creando sede',dataForm);
    this.apiService.create('createSede', dataForm).subscribe((resp) => {
      console.log(resp);
    });
  }

  updateAction() {
    const dataForm: Isedes = this.form.value;
    console.log(this.action);
    console.log('console update', dataForm);

    this.apiService
      .update(`updateSede/${dataForm.id}`, dataForm)
      .subscribe((resp) => {
        console.log(resp);
      });
  }

}
