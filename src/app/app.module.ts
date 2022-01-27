import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TemplateModule } from './template/template.module';
import { HomeComponent } from './home/home.component';
import { TransferenciasModule } from './transferencias/transferencias.module';
import { TransferenciasService } from './transferencias.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TemplateModule,
    TransferenciasModule
  ],
  providers: [
    TransferenciasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
