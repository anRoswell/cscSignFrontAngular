import { Component, OnInit } from '@angular/core';

// Componentes
import { CreateProfesionesComponent } from './create-profesiones/create-profesiones.component';

// Ngx Boostrap
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';

// Service
import { ApiService } from 'src/app/services/api.service';

// Interface
import { IProfesion } from 'src/app/models/profesiones.model';

@Component({
  selector: 'app-profesiones',
  templateUrl: './profesiones.component.html',
  styleUrls: ['./profesiones.component.scss'],
})
export class ProfesionesComponent implements OnInit {
  //#region Variables
  profesiones: Array<IProfesion>;
  bsModalRef?: BsModalRef;
  //#endregion

  //#region Constructor
  constructor(
    //Injyección de dependencia
    private apiService: ApiService,
    private modalService: BsModalService
  ) {}
  //#endregion

  //#region CicleLife
  ngOnInit(): void {
    this.getProfesiones();
  }
  //#endregion

  //#region InitialGet

  //Encapsulación
  private getProfesiones(): void {
    this.apiService.all('searchAllProfesiones').subscribe((resp) => {
      this.profesiones = resp.body;
    });
  }
  //#endregion

  //#region Modal
  openModalWithComponent(action: string, profesion?: IProfesion) {
    const initialState: ModalOptions = {
      initialState: {
        action,
        profesion,
      },
      class: 'modal-xl',
      backdrop: true,
    };

    this.bsModalRef = this.modalService.show(
      CreateProfesionesComponent,
      initialState
    );
    this.bsModalRef.content.closeBtnName = 'Close';

    this.modalService.onHide.subscribe((reason: string | any) => {
      console.log(reason);
    });
  }
  //#endregion

  //#region IteractionsTable
  public crearProfesion() {
    console.log('Crear');
  }

  public editarProfesion() {
    console.log('Editar');
  }

  public eliminarProfesion(profesion: IProfesion) {
    this.apiService
      .delete(`deleteProfesion?id=${profesion.id}`)
      .subscribe((resp) => {
        alert('Eliminado satisfactrriamente');
      });
  }
  //#endregion
}
