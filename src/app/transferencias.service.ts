import { Injectable } from '@angular/core';
/*import { HttpClient, HttpHeaders } from '@angular/common/http';*/
import { HttpClient} from '@angular/common/http';
import { Transferencia } from './transferencias/transferencia';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferenciasService {

  constructor( private http: HttpClient ) { }

  salvar( transferencia : Transferencia) : Observable<Transferencia>{

    //const header = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    return this.http.post<Transferencia>('http://localhost:8080/api/transferencia/efetuandoTransferencia' ,
     transferencia);
 }

  getTransferencia() : Transferencia {
    let teransferencia : Transferencia = new Transferencia();
    teransferencia.contaDestino = "43935431-3";
    teransferencia.contaOrigem = "45812719-2";
    teransferencia.valorTransferido = 5000;
    return teransferencia;
  }
}

