import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Subject } from 'rxjs';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { Component, OnInit, ViewChild } from '@angular/core';

import { ApiService } from './../../services/api.service';
import { StorageService } from './../../services/storage.service';

import { environment } from './../../../environments/environment';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styles: [],
})
export class DatatableComponent implements OnInit {
  public dtOptions: any = {};
  public dtTrigger: Subject<any> = new Subject<any>();
  public files = [];
  public data: any;
  public user: any;
  public server = environment.server;

  constructor(
    private apiService: ApiService,
    private storage: StorageService,
    private router: Router
  ) {
    this.user = this.storage.read('_user');
  }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      // Declare the use of the extension in the dom parameter
      dom: 'Bfrtip',
      // Configure the buttons
      // buttons: [
      //   'columnsToggle',
      //   'colvis',
      //   'copy',
      //   'print',
      //   'excel',
      //   {
      //     text: 'Some button',
      //     key: '1',
      //     action: function (e, dt, node, config) {
      //       alert('Button activated');
      //     },
      //   },
      // ],
      // Use this attribute to enable the responsive extension
      responsive: true,
      language: {
        url: 'https://cdn.datatables.net/plug-ins/1.10.22/i18n/Spanish.json',
      },
    };

    this.getLoadFileList();
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  getLoadFileList() {
    this.apiService.all('nuevosAfialidos').subscribe((fileLoadList) => {
      this.files = fileLoadList.body;
      this.dtTrigger.next();
    });
  }

  editFileLoad(fileLoad: any) {
    console.log(fileLoad);
  }

  deleteFileLoad(fileLoad: any, key: number) {
    Swal.fire({
      title: '¿Estas seguro?',
      text: '¡Esto anulara todo el listado de usuario anexados en el mismo!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, borrarlo!',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        console.log('Clicked Yes, File deleted!');
        this.deleteCargaArchivos({ ...fileLoad, userId: this.user.id }, key);
      } else if (result.isDismissed) {
        console.log('Clicked No, File is safe!');
      }
    });
  }

  goToAdd() {
    this.router.navigate(['/admin/usuarios/cargaArchivo', 2]);
  }

  deleteCargaArchivos(fileLoad: any, key: number) {
    this.apiService.update('deleteCargaArchivos', fileLoad).subscribe((_) => {
      Swal.fire({
        title: '¿Borrar archivo!',
        text: '¡El archivo y los registros han sido borrado exitosamente!',
        icon: 'success',
        confirmButtonText: 'Ok',
      });
      this.files.splice(key, 1);
      this.dtTrigger.next();
    });
  }
}
