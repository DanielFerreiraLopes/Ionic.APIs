import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalhefilmesPageRoutingModule } from './detalhefilmes-routing.module';

import { DetalhefilmesPage } from './detalhefilmes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalhefilmesPageRoutingModule
  ],
  declarations: [DetalhefilmesPage]
})
export class DetalhefilmesPageModule {}
