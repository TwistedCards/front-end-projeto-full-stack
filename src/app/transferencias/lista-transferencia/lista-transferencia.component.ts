import { Component, OnInit } from '@angular/core';
import { TransferenciasService } from '../../transferencias.service';
import { Transferencia } from '../transferencia'

@Component({
  selector: 'app-lista-transferencia',
  templateUrl: './lista-transferencia.component.html',
  styleUrls: ['./lista-transferencia.component.css']
})
export class ListaTransferenciaComponent implements OnInit {

  transferencias: Transferencia[] = [];

  constructor(private service: TransferenciasService) {
  }

  ngOnInit(): void {
    this.service
        .getTransferencias()
        .subscribe(resposta => this.transferencias = resposta);
  }

}
