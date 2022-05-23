import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-report-solicitud-servicios',
  templateUrl: './report-solicitud-servicios.component.html',
  styleUrls: ['./report-solicitud-servicios.component.scss'],
})
export class ReportSolicitudServiciosComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder, private apiService: ApiService) {
    this.form = this.fb.group({
      fDesde: ['', Validators.required],
      fHasta: ['', Validators.required],
      servicioId: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  getInforme() {
    const { fDesde, fHasta, servicioId } = this.form.value;
    const params = new HttpParams()
      .set('fDesde', fDesde.toString())
      .set('fHasta', fHasta.toString());

    // this.apiService
    //   .InformesWithParams(`reports/${servicioId}`, params)
    //   .subscribe((resp) => {
    //     this.downloadFile(
    //       'solicitudes',
    //       'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    //     );
    //   });

    this.apiService
      .InformesWithParams(`reports/${servicioId}`, params)
      .subscribe((resp) => {
        this.downloadFileFromServer(resp.pathToDownload);
      });
  }

  private downloadFileFromServer(src: string) {
    var myBodyId = document.getElementById('downloadExcel');
    let a = document.createElement('a');
    a.href = src;
    a.click();
    myBodyId.appendChild(a);
  }

  private downloadFile(responseMessage: any, type: string) {
    const file = new Blob([responseMessage], {
      type,
    });
    const fileURL = URL.createObjectURL(file);
    window.open(fileURL, '_blank');
  }
}
