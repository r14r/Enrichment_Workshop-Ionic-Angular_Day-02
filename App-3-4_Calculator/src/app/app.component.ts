import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
	selector: 'app-root',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
	public selectedIndex = 0;
	public appPages = [
		{ title: 'Basic', url: '/calculator/basic', icon: 'calculator' },
		{ title: 'Postfix', url: '/calculator/postfix', icon: 'calculator' },
		{
			title: 'Scientific',
			url: '/calculator/scientific',
			icon: 'calculator',
		},
	];

	private PREFIX = 'AppComponent';
	private log(func, line = '') {
		console.log(this.PREFIX + '/' + func + '::' + line);
	}

	constructor(
		private platform: Platform,
		private splashScreen: SplashScreen,
		private statusBar: StatusBar
	) {
		this.initializeApp();
	}

	initializeApp() {
		this.platform.ready().then(() => {
			// this.statusBar.styleDefault();
			// this.splashScreen.hide();
		});
	}

	ngOnInit() {
		const path = window.location.pathname.split('folder/')[1];
		if (path !== undefined) {
			this.selectedIndex = this.appPages.findIndex(
				(page) => page.title.toLowerCase() === path.toLowerCase()
			);
		}
	}
}
