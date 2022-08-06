import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-comp-grupo1',
  templateUrl: './comp-grupo1.component.html',
  styleUrls: ['./comp-grupo1.component.scss']
})
export class CompGrupo1Component implements OnInit {

  @Input() form: FormGroup;
  @Input() sedes: any;
  @Input() empresas: any;

  constructor() { }

  ngOnInit(): void {
  }

}
