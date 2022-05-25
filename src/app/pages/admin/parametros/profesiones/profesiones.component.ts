import { Component, OnInit } from '@angular/core';

// Ngx Boostrap
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';

// Service
import { ApiService } from 'src/app/services/api.service';

// Profesionales
import { CreateProfesionalComponent } from '../../operaciones/create-profesional/create-profesional.component';

@Component({
  selector: 'app-profesiones',
  templateUrl: './profesiones.component.html',
  styleUrls: ['./profesiones.component.scss']
})
export class ProfesionesComponent implements OnInit {

//#region Variables
profesiones: any;
//#endregion

//#region Constructor
bsModalRef?: BsModalRef;
constructor(
  //Injyección de dependencia
  private apiService: ApiService,
  private modalService: BsModalService
) { }
//#endregion

//#region CicleLife
ngOnInit(): void {
  this.getProfesiones();
}
//#endregion

//#region InitialGet
//Encapsulación
private getProfesiones():void{
  this.apiService.all("searchAllProfesiones").subscribe(resp=>{
    this.profesiones=resp.body;
  })
}
//#endregion

//#region Modal
openModalWithComponent(action: number, profesion: any = '') {
  const initialState = {
    initialState: {
      list: [
        'Open a modal with component',
        'Pass your data',
        'Do something else',
        '...'
      ],
      title: 'Modal with component',
      parametros: {
        action,
        profesion
      }
    },
    class: 'modal-xl'
  };

  this.bsModalRef = this.modalService.show(CreateProfesionalComponent, initialState);
  this.bsModalRef.content.closeBtnName = 'Close';

  this.modalService.onHide.subscribe((reason: string | any) => {
    console.log(reason)
  })
}
//#endregion

//#region IteractionsTable
public crearProfesion(){
  console.log ("Crear");
}

public editarProfesion(){
  console.log("Editar");
}

public eliminarProfesion(profesion: any){
  this.apiService.delete(`deleteProfesion?id=${profesion.id}`).subscribe(resp=>{
    alert('Eliminado satisfactrriamente');
  })
}
//#endregion

}
