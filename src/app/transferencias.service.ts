import { Injectable } from '@angular/core';
import { Transferencia } from './transferencias/transferencia';

@Injectable({
  providedIn: 'root'
})
export class TransferenciasService {

  constructor() { }

  getTransferencia() : Transferencia {
    let teransferencia : Transferencia = new Transferencia();
    teransferencia.contaDestino = "xxxxx";
    teransferencia.contaOrigem = "xxxxxx";
    teransferencia.valorTransferido = 10.000;
    teransferencia.dataTransferencia = "10/03/2022";
    return teransferencia;
  }
}

