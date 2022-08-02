import { Component, OnInit } from '@angular/core';

//Font_Awesome
import {
  faEdit,
  faTrashAlt,
} from '@fortawesome/free-solid-svg-icons';

import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';

import { Iempresas } from 'src/app/models/empresas.model';
import { ApiService } from 'src/app/services/api.service';
import { EmpresasFormComponent } from './empresas-form/empresas-form.component';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.scss']
})
export class EmpresasComponent implements OnInit {
//#region Variables
  empresas: Array<Iempresas>;

  //Parameters Modal
  bsModalRef?: BsModalRef;

  //fontAwesome
  faEdit =  faEdit;
  faTrashAlt = faTrashAlt;
//#endregion

  constructor(
    private apiService : ApiService,
    private modalService: BsModalService
  ) { }

  ngOnInit(): void {
    this.getEmpresas();
  }

  //#region Modal
  openModalWithComponent(action: string, empresas?: Iempresas) {
    const initialState: ModalOptions = {
      initialState: {
        action,
        empresas,
      },

      class: 'modal-md',
      backdrop: true,
    };

    this.bsModalRef = this.modalService.show(
      EmpresasFormComponent,
      initialState
    );
    this.bsModalRef.content.closeBtnName = 'Close';

    this.modalService.onHide.subscribe((reason: string | any) => {
      console.log(reason);
    });
  }
//#endregion

//#region Métodos
public eliminarEmpresa(empresa: Iempresas) {
  this.apiService
    .delete(`deleteEmpresa?id=${empresa.id}`)
    .subscribe((resp) => {
      alert('Eliminado satisfactoriamente');
    });
}

private getEmpresas(): void{
  this.apiService.all('searchAllEmpresa').subscribe((resp)=>{
    this.empresas = resp.body
  });
}
//#endregion

}
