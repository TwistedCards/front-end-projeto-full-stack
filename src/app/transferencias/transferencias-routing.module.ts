import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransferenciasFormComponent } from './transferencias-form/transferencias-form.component'

const routes: Routes = [
  { path: 'transferencias-form' , component: TransferenciasFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransferenciasRoutingModule { }
