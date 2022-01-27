import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { TransferenciasRoutingModule } from './transferencias-routing.module';
import { TransferenciasFormComponent } from './transferencias-form/transferencias-form.component';
import { ListaTransferenciaComponent } from './lista-transferencia/lista-transferencia.component';


@NgModule({
  declarations: [
    TransferenciasFormComponent,
    ListaTransferenciaComponent
  ],
  imports: [
    CommonModule,
    TransferenciasRoutingModule,
    FormsModule
  ], exports: [
    TransferenciasFormComponent,
    ListaTransferenciaComponent
  ]
})
export class TransferenciasModule { }
