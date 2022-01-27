import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transferencia } from './transferencias/transferencia';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferenciasService {

  constructor( private http: HttpClient ) { }

  salvar( transferencia : Transferencia) : Observable<Transferencia>{
    return this.http.post<Transferencia>('http://localhost:8080/api/transferencia/efetuandoTransferencia' ,
                                      transferencia);
 }

  getTransferencia() : Transferencia {
    let teransferencia : Transferencia = new Transferencia();
    teransferencia.contaDestino = "xxxxx";
    teransferencia.contaOrigem = "xxxxxx";
    teransferencia.valorTransferido = 10.000;
    teransferencia.dataTransferencia = "10/03/2022";
    return teransferencia;
  }
}

