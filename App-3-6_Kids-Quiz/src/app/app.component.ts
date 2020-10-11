import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
	selector: 'app-root',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.scss'],
})
export class AppComponent {
	private PREFIX = 'AppComponent';
	private log(func, line = '') {
		console.log(this.PREFIX + '/' + func + '::' + line);
	}

	constructor(
		private platform: Platform,
		private splashScreen: SplashScreen,
		private statusBar: StatusBar
	) {
		this.log('constructor');

		this.initializeApp();
	}

	initializeApp() {
		this.log('initializeApp');
		/*
		this.platform.ready().then(() => {
			this.statusBar.styleDefault();
			this.splashScreen.hide();
		});
		*/
	}
}
