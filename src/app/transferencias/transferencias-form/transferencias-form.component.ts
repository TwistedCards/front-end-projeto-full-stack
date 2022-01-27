import { Component, OnInit } from '@angular/core';

import { Transferencia } from '../transferencia'
import { TransferenciasService } from '../../transferencias.service'

@Component({
  selector: 'app-transferencias-form',
  templateUrl: './transferencias-form.component.html',
  styleUrls: ['./transferencias-form.component.css']
})
export class TransferenciasFormComponent implements OnInit {

  transferencia: Transferencia;

  constructor(private service: TransferenciasService) { 
    this.transferencia = new Transferencia();
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.service
        .salvar(this.transferencia)
        .subscribe( response => {
          console.log(response);
        })
  }

}
