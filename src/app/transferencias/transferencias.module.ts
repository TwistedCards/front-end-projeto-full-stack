import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransferenciasRoutingModule } from './transferencias-routing.module';
import { TransferenciasFormComponent } from './transferencias-form/transferencias-form.component';


@NgModule({
  declarations: [
    TransferenciasFormComponent
  ],
  imports: [
    CommonModule,
    TransferenciasRoutingModule
  ], exports: [
    TransferenciasFormComponent
  ]
})
export class TransferenciasModule { }
