import { Component, OnInit } from '@angular/core';

//Font_Awesome
import {
  faCoffee,
  faEdit,
  faTrashAlt,
  faSave,
  faPlusSquare,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';

//Ng-bootstrap
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';

// Interfaces
import { Iempresas } from 'src/app/models/empresas.model';
import { IProfesion } from 'src/app/models/profesiones.model';
import { Isedes } from 'src/app/models/sedes.model';
import { IProfesionales } from 'src/app/models/profesionales.model';

import { ApiService } from './../../../../services/api.service';
import { CreateProfesionalFormComponent } from '../create-profesional-form/create-profesional-form.component';

@Component({
  selector: 'app-create-profesional',
  templateUrl: './create-profesional.component.html',
  styleUrls: ['./create-profesional.component.scss'],
})
export class CreateProfesionalComponent implements OnInit {
  //#region VARIABLES

  // Generales
  empresas?: Array<Iempresas>;
  sedes?: Array<IProfesion>;
  profesiones?: Array<Isedes>;
  profesionales?: Array<IProfesionales>;
  parametros: any;

  // Font Awesome
  faCoffee: IconDefinition = faCoffee;
  faEdit: IconDefinition = faEdit;
  faTrashAlt: IconDefinition = faTrashAlt;
  faSave: IconDefinition = faSave;
  faPlusSquare: IconDefinition = faPlusSquare;

  // Modal
  bsModalRef?: BsModalRef;
  //#endregion

  constructor(
    private modalService: BsModalService,
    private apiService: ApiService
  ) {}

  //#region CYCLE LIFE
  ngOnInit(): void {
    this.getParametros();
  }
  //#endregion

  //#region Consultar
  consultar() {}

  newRegister() {
    const initialState: ModalOptions = {
      initialState: {
        title: 'Modal with component',
        parametros: {
          empresas: this.empresas,
          sedes: this.sedes,
          profesiones: this.profesiones,
        },
      },
      class: 'modal-xl',
    };
    this.bsModalRef = this.modalService.show(
      CreateProfesionalFormComponent,
      initialState
    );
    this.bsModalRef.content.closeBtnName = 'Close';
  }
  //#endregion

  //#region
  public getParametros() {
    this.apiService.all('initialParameters').subscribe((resp) => {
      this.empresas = resp.body.empresas;
      this.sedes = resp.body.sedes;
      this.profesiones = resp.body.profesiones;
      this.profesionales = resp.body.profesionales;
    });
  }

  EditopenModalWithComponent(action: number, profesional: any) {
    const initialState = {
      initialState: {
        list: [
          'Open a modal with component',
          'Pass your data',
          'Do something else',
          '...',
        ],
        title: 'Modal with component',
        action,
        profesional,
        parametros: {
          empresas: this.empresas,
          sedes: this.sedes,
          profesiones: this.profesiones,
        },
      },
      class: 'modal-xl',
    };
    console.log('Profesionales ', profesional);
    this.bsModalRef = this.modalService.show(
      CreateProfesionalFormComponent,
      initialState
    );
    this.bsModalRef.content.closeBtnName = 'Close';

    this.modalService.onHide.subscribe((reason: string | any) => {});
  }
  //#endregion
}
