import { Component, OnInit } from '@angular/core';

// import * as math from 'mathjs'

@Component({
	selector: 'app-calculator-scientific',
	templateUrl: './page.html',
	styleUrls: ['./page.scss'],
})
export class CalculatorScientificPage implements OnInit {
	outputQueue = '';
	operatorStack = [];
	operators = {
		'^': { precedence: 4, associativity: 'Right' },
		'/': { precedence: 3, associativity: 'Left' },
		'*': { precedence: 3, associativity: 'Left' },
		'+': { precedence: 2, associativity: 'Left' },
		'-': { precedence: 2, associativity: 'Left' },
	};

	expression: any = '';
	result: any;

	private PREFIX = 'CalculatorScientificPage';
	private log(func, line = '') {
		console.log(this.PREFIX + '::' + func + '::' + line);
	}

	constructor() {}

	ngOnInit() {}

	ionViewDidLoad() {
		this.log('ionViewDidLoad');
	}

	isNumeric(value) {
		return !isNaN(parseFloat(value)) && isFinite(value);
	}

	clean(data) {
		for (var i = 0; i < data.length; i++) {
			if (data[i] === '') {
				data.splice(i, 1);
			}
		}
		return data;
	}

	infixToPostfix(infix) {
		this.log('infixToPostfix', infix);

		infix = infix.replace(/\s+/g, '');
		infix = infix.split(/([\+\-\*\/\^\(\)])/);
		infix = this.clean(infix);

		for (var i = 0; i < infix.length; i++) {
			var token = infix[i];
			if (this.isNumeric(token)) {
				this.outputQueue += token + ' ';
			} else if ('^*/+-'.indexOf(token) !== -1) {
				var o1 = token;
				var o2 = this.operatorStack[this.operatorStack.length - 1];
				while (
					'^*/+-'.indexOf(o2) !== -1 &&
					((this.operators[o1].associativity === 'Left' &&
						this.operators[o1].precedence <=
							this.operators[o2].precedence) ||
						(this.operators[o1].associativity === 'Right' &&
							this.operators[o1].precedence <
								this.operators[o2].precedence))
				) {
					this.outputQueue += this.operatorStack.pop() + ' ';
					o2 = this.operatorStack[this.operatorStack.length - 1];
				}
				this.operatorStack.push(o1);
			} else if (token === '(') {
				this.operatorStack.push(token);
			} else if (token === ')') {
				while (
					this.operatorStack[this.operatorStack.length - 1] !== '('
				) {
					this.outputQueue += this.operatorStack.pop() + ' ';
				}
				this.operatorStack.pop();
			}
		}
		while (this.operatorStack.length > 0) {
			this.outputQueue += this.operatorStack.pop() + ' ';
		}

		this.log('infixToPostfix', 'outputQueue = ' + this.outputQueue);

		return this.outputQueue;
	}

	convertToFloat(value): number {
		return parseFloat(value);
	}

	solvePostfix(postfix) {
		this.log('solvePostfix', postfix);

		var resultStack = [];
		postfix = postfix.split(' ');
		for (var i = 0; i < postfix.length; i++) {
			if (this.isNumeric(postfix[i])) {
				resultStack.push(postfix[i]);
			} else {
				var a = resultStack.pop();
				var b = resultStack.pop();

				if (postfix[i] === '+') {
					resultStack.push(
						this.convertToFloat(a) + this.convertToFloat(b)
					);
				} else if (postfix[i] === '-') {
					resultStack.push(
						this.convertToFloat(b) - this.convertToFloat(a)
					);
				} else if (postfix[i] === '*') {
					resultStack.push(
						this.convertToFloat(a) * this.convertToFloat(b)
					);
				} else if (postfix[i] === '/') {
					resultStack.push(
						this.convertToFloat(b) / this.convertToFloat(a)
					);
				} else if (postfix[i] === '^') {
					resultStack.push(
						Math.pow(this.convertToFloat(b), this.convertToFloat(a))
					);
				}
			}
		}

		var result = '';

		if (resultStack.length > 1) {
			result = 'error';
		} else {
			result = resultStack.pop();
		}

		this.log('solvePostfix', '' + result);

		return result;
	}

	clear() {
		this.expression = '';
		this.outputQueue = '';
		this.operatorStack = [];

		this.log('clear', '' + this.expression);
	}

	calculate() {
		this.log('calculate', 'expression = ' + this.expression);

		var postfix = this.infixToPostfix(this.expression);
		this.log('calculate', 'postfix = ' + postfix);

		this.expression = this.solvePostfix(postfix.trim());

		this.log('calculate', 'expression = ' + this.expression);

		this.outputQueue = '';
		this.operatorStack = [];
	}

	evaluate() {
		// this.expression = math.format(eval(this.expression), {precision: 14});
		this.expression = eval(this.expression);
	}

	add(value: string) {
		this.log('add', 'value=' + value);

		const noexpression =
			this.expression === '' || this.expression === undefined
				? true
				: false;

		if (this.expression === '' || this.expression === undefined) {
			this.expression = String(value);
		} else {
			this.log('add', 'add value ' + value);
			this.expression = this.expression.concat(value);
		}

		this.log('add', 'expression=' + this.expression);
	}

	addFunction(value: string) {
		this.log('add', 'value=' + value);

		const noexpression =
			this.expression === '' || this.expression === undefined
				? true
				: false;

		if (!noexpression) {
			this.expression = value + '(' + this.expression + ')';
			this.log('add', 'evaluate ' + this.expression);
			this.evaluate();
		}

		this.log('add', 'expression=' + this.expression);
	}
}
