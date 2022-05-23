import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  public form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    private router: Router
  ) {
    this.form = this.fb.group({
      consecutivo: [1],
      nitPrestador: [],
      nombrePrestador: [],
      tipoIdentificacion: [],
      numIdentificacion: ['', [Validators.required]],
      name: [],
      primerApellido: [],
      segundoApellido: [],
      edad: [],
      sexo: [],
      address: [],
      phone: [],
      idRegional: [],
      fechaRemision: [],
      responsableRemision: [],
      fechaAsignacionValoracionInicial: [],
      asiste: [],
      fechaConsultaPrimeraVezCuidadosPaleativos: [],
      modalidadAtencion: [],
      idCIE10: [],
      diagnostico: [],
      oncologico: [],
      indiceBarthel: [],
      escalaDownton: [],
      escalaBorg: [],
      escalaReisberg: [],
      karnofsky: [],
      esas: [],
      ecaf: [],
      enese: [],
      pffeifer: [],
      ramsay: [],
      resultadoInstrumentoNECPAL: [],
      ingresoAlPrograma: [],
      justificacion: [],
      fechaIngresoAlPrograma: [],
      evaluadoJuntaClinicaPaliativaDeIngreso: [],
      idcpal: [],
      escalaDeDolorEvaInicial: [],
      escalaCalidadVidaPosInicial: [],
      nivel: [],
      ambito: [],
      consultaSeguimiento: [],
      medicinaPaliativa: [],
      periodicidadMedicinaPaleativa: [],
      enfermeria: [],
      periodicidadEnfermeria: [],
      nutricion: [],
      periodicidadNutricion: [],
      trabajoSocial: [],
      periodicidadTrabajoSocial: [],
      psicologia: [],
      periodicidadPsicologia: [],
      fisioterapia: [],
      periodicidadFisioterapia: [],
      guiaEspiritual: [],
      periodicidadGuiaEspiritual: [],
      manejoDelDolor: [],
      medicamentosOpioides: [],
      ordenamientoMedicamentosInsumos: [],
      manejoOxigenotepraia: [],
      tiempoEstimadoTratamiento: [],
      estadoActual: [],
      fechaEstado: [],
      estanciaEnPrograma: [],
      promedioCostoMesAntesIngreso: [],
    });
  }

  ngOnInit(): void {}

  saveForm() {
    const data = this.form.value;
    this.api.create(`patients`, data).subscribe((response) => {
      console.log(response);
    });
  }

  consultarPatient() {}

  back() {
    this.router.navigate(['admin/patients/list']);
  }
}
