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
      return this.http.post<Transferencia>('http://localhost:8080/api/transferencia/efetuandoTransferencia' ,
                                            transferencia);
 }

  getTransferencias() : Observable<Transferencia[]>{
    return this.http.get<Transferencia[]>('http://localhost:8080/api/transferencia/todasTransferencias');
  }

}

