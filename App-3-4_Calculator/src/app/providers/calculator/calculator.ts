import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class CalculatorProvider {
	constructor(public http: HttpClient) {
		console.log("Hello CalculatorProvider Provider");
	}
}
