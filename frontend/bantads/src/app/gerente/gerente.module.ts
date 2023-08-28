import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio';
import { FooterModule } from '../footer';
import { NavbarComponent } from './navbar';
import { MatDividerModule } from '@angular/material/divider';
import { GerenteService } from './services';


@NgModule({
  declarations: [
    InicioComponent,
  ],
  imports: [
    CommonModule,
    FooterModule,
    NavbarComponent,
    MatDividerModule,
  ],
  providers: [
    GerenteService,
  ]
})
export class GerenteModule { }
