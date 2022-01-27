import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransferenciasFormComponent } from './transferencias-form/transferencias-form.component';
import { ListaTransferenciaComponent } from './lista-transferencia/lista-transferencia.component';

const routes: Routes = [
  { path: 'transferencias-form' , component: TransferenciasFormComponent },
  { path: 'lista-transferencia' , component: ListaTransferenciaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransferenciasRoutingModule { }
