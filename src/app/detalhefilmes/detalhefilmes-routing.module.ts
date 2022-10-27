import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalhefilmesPage } from './detalhefilmes.page';

const routes: Routes = [
  {
    path: '',
    component: DetalhefilmesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalhefilmesPageRoutingModule {}
