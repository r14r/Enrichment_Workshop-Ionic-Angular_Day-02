import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class Data {
	dataUrl = 'assets/data/questions.json';

	data: any;

	private PREFIX = 'Data';
	private log(func, line = '') {
		console.log(this.PREFIX + '/' + func + '::' + line);
	}

	constructor(public http: HttpClient) {
		this.log('constructor');
	}

	getData() {
		this.http.get(this.dataUrl).subscribe((data) => {
			this.data = data;
			this.log('getData', 'data=' + JSON.stringify(this.data));
		});
	}

	load(): any {
		this.log('load');

		if (this.data) {
			this.log('load'), 'data = ' + JSON.stringify(this.data);

			return of(this.data);
		} else {
			this.log('load', 'load from ' + this.dataUrl);

			return this.http
				.get(this.dataUrl)
				.pipe(map(this.processData, this));
		}
	}

	processData(data: any) {
		this.log('processData');
		this.data = data.questions;

		return this.data;
	}
}
