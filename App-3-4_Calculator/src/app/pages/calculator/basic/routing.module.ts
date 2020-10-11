import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalculatorBasicPage } from './page';

const routes: Routes = [
  {
    path: '',
    component: CalculatorBasicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalculatorBasicPageRoutingModule {}
