import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { FlashCardComponent } from '../components/flash-card/flash-card';

@NgModule({
	imports: [CommonModule, FormsModule, IonicModule, HomePageRoutingModule],
	declarations: [HomePage, FlashCardComponent],
})
export class HomePageModule {
	private PREFIX = 'HomePageModule';
	private log(func, line = '') {
		console.log(this.PREFIX + '/' + func + '::' + line);
	}

	constructor() {
		this.log('constructor');
	}
}
