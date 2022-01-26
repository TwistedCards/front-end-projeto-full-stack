import { Component, OnInit } from '@angular/core';

import { Transferencia } from '../transferencia'

@Component({
  selector: 'app-transferencias-form',
  templateUrl: './transferencias-form.component.html',
  styleUrls: ['./transferencias-form.component.css']
})
export class TransferenciasFormComponent implements OnInit {

  transferencia: Transferencia = new Transferencia;

  constructor() { }

  ngOnInit(): void {
  }

}
