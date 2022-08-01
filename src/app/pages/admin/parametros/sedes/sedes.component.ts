import { Component, OnInit } from '@angular/core';

//Font_Awesome
import {
  faEdit,
  faTrashAlt,
} from '@fortawesome/free-solid-svg-icons';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';

import { ApiService } from 'src/app/services/api.service';
import { Isedes } from 'src/app/models/sedes.model';
import { SedeFormComponent } from './sede-form/sede-form.component';

@Component({
  selector: 'app-sedes',
  templateUrl: './sedes.component.html',
  styleUrls: ['./sedes.component.scss']
})

export class SedesComponent implements OnInit {
  //#region Variables
    sedes: Array<Isedes>;

    //Parameters Modal
    bsModalRef?: BsModalRef;

    //fontAwesome
    faEdit =  faEdit;
    faTrashAlt = faTrashAlt;
  //#endregion

  //#region Constructor
    constructor(
      private apiService : ApiService,
      private modalService: BsModalService
    ) { }
  //#endregion

  //#region CicleLife
    ngOnInit(): void {
      this.getSedes();
    }
  //#endregion

  //#region Modal
    openModalWithComponent(action: string, sede?: Isedes) {
      const initialState: ModalOptions = {
        initialState: {
          action,
          sede,
        },

        class: 'modal-md',
        backdrop: true,
      };

      this.bsModalRef = this.modalService.show(
        SedeFormComponent,
        initialState
      );
      this.bsModalRef.content.closeBtnName = 'Close';

      this.modalService.onHide.subscribe((reason: string | any) => {
        console.log(reason);
      });
    }
  //#endregion

  //#region Métodos
    public eliminarSede(sede: Isedes) {
      this.apiService
        .delete(`deleteSede?id=${sede.id}`)
        .subscribe((resp) => {
          alert('Eliminado satisfactoriamente');
        });
    }

    private getSedes(): void{
      this.apiService.all('searchAllSedes').subscribe((resp)=>{
        this.sedes = resp.body
      });
    }
  //#endregion
}
