import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-skeleton-text',
	templateUrl: './skeleton-text.page.html',
	styleUrls: ['./skeleton-text.page.scss'],
})
export class SkeletonTextPage implements OnInit {
	data: any;

	PREFIX = this.constructor.name;
	log(func, line = '') {
		console.log(this.PREFIX + '::' + func + '| ' + line);
	}

	constructor() {
		this.log('constructor');
	}

	ngOnInit() {
		this.log('ngOnInit');
	}

	ionViewWillEnter() {
		this.log('ionViewWillEnter');
		setTimeout(() => {
			this.data = {
				heading: 'Normal text',
				para1: 'Lorem ipsum dolor sit amet, consectetur',
				para2: 'adipiscing elit.',
			};
			this.log('ionViewWillEnter', 'setTmeout');
		}, 1000);
	}

	toggleSkeleton() {
		const skeletonEl = document.getElementById('skeleton'),
			skeletonStyle = window.getComputedStyle(skeletonEl),
			skeletonDisplay = skeletonStyle.getPropertyValue('display');
		const dataEl = document.getElementById('data'),
			dataStyle = window.getComputedStyle(dataEl),
			dataDisplay = dataStyle.getPropertyValue('display');

		document.getElementById('skeleton').style.display =
			skeletonDisplay === 'none' ? 'block' : 'none';
		document.getElementById('data').style.display =
			dataDisplay === 'none' ? 'block' : 'none';
	}
}
