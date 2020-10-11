import { ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Data } from '../providers/data';

@Component({
	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: ['home.page.scss'],
})
export class HomePage {
	@ViewChild('slides') slides: any;

	hasAnswered: boolean = false;
	score: number = 0;

	slideOptions: any;
	questions: any;

	private PREFIX = 'HomePage';
	private log(func, line = '') {
		console.log(this.PREFIX + '/' + func + '::' + line);
	}

	constructor(public navCtrl: NavController, public dataService: Data) {
		this.log('constructor');
	}

	ionViewWillEnter() {
		this.log('ionViewWillEnter');
	}

	ionViewDidEnter() {
		this.log('ionViewDidEnter');

		this.slides.lockSwipes(true);

		this.dataService.load().subscribe((data) => {
			this.log('subscribe', 'data=' + JSON.stringify(data));

			data.map((question) => {
				this.log('map', 'question=' + JSON.stringify(question));

				let originalOrder = question.answers;
				question.answers = this.randomizeAnswers(originalOrder);
				return question;
			});

			this.questions = data;
		});
	}

	nextSlide() {
		this.log('nextSlide');

		this.slides.lockSwipes(false);
		this.slides.slideNext();
		this.slides.lockSwipes(true);
	}

	selectAnswer(answer, question) {
		this.log('selectAnswer', 'answer=' + answer + ', question=' + question);

		this.hasAnswered = true;
		answer.selected = true;
		question.flashCardFlipped = true;

		if (answer.correct) {
			this.score++;
		}

		setTimeout(() => {
			this.hasAnswered = false;
			this.nextSlide();
			answer.selected = false;
			question.flashCardFlipped = false;
		}, 3000);
	}

	randomizeAnswers(rawAnswers: any[]): any[] {
		for (let i = rawAnswers.length - 1; i > 0; i--) {
			let j = Math.floor(Math.random() * (i + 1));
			let temp = rawAnswers[i];
			rawAnswers[i] = rawAnswers[j];
			rawAnswers[j] = temp;
		}

		this.log('randomizeAnswers', JSON.stringify(rawAnswers));

		return rawAnswers;
	}

	restartQuiz() {
		this.log('restartQuiz');

		this.score = 0;
		this.slides.lockSwipes(false);
		this.slides.slideTo(1, 1000);
		this.slides.lockSwipes(true);
	}
}
