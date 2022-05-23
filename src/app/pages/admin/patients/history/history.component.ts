import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent implements OnInit {
  public form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.form = this.fb.group({
      idMonth: [],
      idYear: [],
      fechaAtencion: [],
      idModalidadAtencion: [],
      escalaDolor: [],
      encuestaCalidadVida: [],
      karnofsky: [],
      esas: [],
      sgtoMedicinaAlternativa: [],
      sgtoEnfermeria: [],
      atencionesAuxEnfermeria: [],
      sgtoPsicologia: [],
      sgtoNutricion: [],
      sgtoTrabajoSocial: [],
      sgtoGuiaEspiritual: [],
      sgtoTerapiaFisica: [],
      totalActividadesMes: [],
      oxigenoterapia: [],
      opioides: [],
      nombreMedicamento: [],
      miligramosMes: [],
      otrosMedicamentosInsumosTecnologias: [],
      idNovedad: [],
      justificacionNovedad: [],
      valorFacturaMesTotal: [],
    });

    const numIdentificacion =
      this.route.snapshot.paramMap.get('numIdentificacion');
    const action = this.route.snapshot.paramMap.get('action');
    console.log(numIdentificacion);
    console.log(action);
  }

  ngOnInit(): void {}

  saveForm() {
    const data = this.form.value;
    this.api.create(`users`, data).subscribe((response) => {});
  }

  back() {
    this.router.navigate(['admin/patients/list']);
  }
}
