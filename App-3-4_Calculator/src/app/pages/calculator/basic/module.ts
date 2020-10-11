import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CalculatorBasicPage } from './page';

const routes: Routes = [{ path: '', component: CalculatorBasicPage }];

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		RouterModule.forChild(routes),
	],
	declarations: [CalculatorBasicPage],
})
export class CalculatorBasicPageModule {}
