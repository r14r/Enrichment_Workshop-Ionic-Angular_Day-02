import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-calculator1',
	templateUrl: './page.html',
	styleUrls: ['./page.scss'],
})
export class CalculatorBasicPage implements OnInit {
	result = '';

	private PREFIX = 'CalculatorBasicPage';
	private log(func, line = '') {
		console.log(this.PREFIX + '/' + func + '::' + line);
	}

	constructor() {
		this.log('constructor');
	}

	ngOnInit() {}

	btnClicked(btn) {
		this.log('btnClicked', 'button = ' + btn);

		if (btn == 'C') {
			this.result = '';
		} else if (btn == '=') {
			this.result = this.calculateResult();
		} else if (btn == 'squareroot') {
			this.result = Math.sqrt(eval(this.result)) + '';
		} else if (btn == 'square') {
			this.result = eval(
				'(' + this.result + ') * ( ' + this.result + ')'
			);
		} else if (btn == 'reciproc') {
			this.result = eval(1 + '/ (' + this.result + ')');
		} else {
			this.result += btn;
		}

		this.log('btnClicked', 'result = ' + this.result);
	}

	calculateResult() {
		const calculated = eval(this.result);

		this.log('calculateResult', 'calculated = ' + calculated);
		return calculated;
	}
}
