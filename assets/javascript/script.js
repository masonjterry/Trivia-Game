$(document).ready(function() {

	var answerOne;
	var answerTwo;
	var answerThree;
	var answerFour;
	var answerFive;
	var answerSix;
	var answerSeven;
	var answerEight;
	var answerNine;
	var answerTen;

	var correct = 0;
	var incorrect = 0;
	var unanswered = 0;

	var click;

	var trivia = {

	quesOne: {
		question: 'Against what opposing team did Babe Ruth hit his first career home run?',
		answers: ['#New York Yankees', 'Boston Red Sox', 'Chicago Cubs', 'Baltimore Black Sox']
	},
	quesTwo: {
		question: 'Who was the first Major League player to pitch a ball over 100 mph?',
		answers: ['Dwight Gooden', 'Roger Clemons', 'Tom Seaver', '#Nolan Ryan']
	},
	quesThree: {
		question: 'Who was the first Major League player to have his number retired?',
		answers: ['Charlie Robertson', 'Babe Ruth', '#Lou Gehrig', 'George Kelly']
	},
	quesFour: {
		question: 'What player was nicknamed "Mr. November"?',
		answers: ['#Derek Jeter', 'Mariano Rivera', 'David Ortiz', 'Reggie Jackson']
	},
	quesFive: {
		question: 'Who was the first baseball player to appear on a Wheaties cereal box?',
		answers: ['#Lou Gehrig', 'Mel Ott', 'Babe Ruth', 'Joe Dimaggio']
	},
	quesSix: {
		question: 'How long was the shortest game in Major League Baseball history?',
		answers: ['#51 minutes', '1 hour 15 minutes', '1 hour 1 minute', '1 hour 33 minutes']
	},
	quesSeven: {
		question: 'During which inning is "Take Me Out to the Ballgame" traditionally sung?',
		answers: ['3rd', '#7th', '1st', '5th']
	},
	quesEight: {
		question: 'How many baseballs are used during a typical Major League Baseball game?',
		answers: ['10', '50', '30', '#100']
	},
	quesNine: {
		question: 'Who was the first Major League player to hit four home runs in a single game?',
		answers: ['Lou Gehrig', '#Bobby Lowe', 'Babe Ruth', 'Ed Delahanty']
	},
	quesTen: {
		question: 'What year did the first recorded baseball game take place?',
		answers: ['#1749', '1949', '1849', '1649']
	}};

	var timeLimit = 30;

	$('.click').click(questionOne);

	click = $(this).attr('id');

	function startTimer() {

		function timer() {
			$('#timer').text('Timer: ' + timeLimit);
			timeLimit--;

			if (timeLimit === -1) {
				clearInterval(timer);
			}

		}

		setInterval(timer, 1000);

	}

	function questionOne() {
		$('#question').text(trivia.quesOne.question);
		$('#answer1').text(trivia.quesOne.answers[0]);
		$('#answer2').text(trivia.quesOne.answers[1]);
		$('#answer3').text(trivia.quesOne.answers[2]);
		$('#answer4').text(trivia.quesOne.answers[3]);

		if (timeLimit === 0) {
			quetionTwo();
		} else if (click === 'answer1') {
			clearInerval();
			questionTwo();
		}

		if (click === 'answer1') {
			correct++;
			console.log('correct: ' + correct);
		} else if (click !== 'answer1') {
			incorrect++;
			console.log('incorrect: ' + incorrect);
		} else {
			unanswered++;
			console.log(unanswered);
		}

		startTimer();
		//setTimeout(questionTwo, 30000);

	}


	function questionTwo() {

		$('#question').text(trivia.quesTwo.question);
		$('#answer1').text(trivia.quesTwo.answers[0]);
		$('#answer2').text(trivia.quesTwo.answers[1]);
		$('#answer3').text(trivia.quesTwo.answers[2]);
		$('#answer4').text(trivia.quesTwo.answers[3]);

		startTimer();

		setTimeout(questionThree, 3000);
	}

	function questionThree() {

		$('#question').text(trivia.quesThree.question);
		$('#answer1').text(trivia.quesThree.answers[0]);
		$('#answer2').text(trivia.quesThree.answers[1]);
		$('#answer3').text(trivia.quesThree.answers[2]);
		$('#answer4').text(trivia.quesThree.answers[3]);

		setTimeout(questionFour, 3000);
	}

	function questionFour() {

		$('#question').text(trivia.quesFour.question);
		$('#answer1').text(trivia.quesFour.answers[0]);
		$('#answer2').text(trivia.quesFour.answers[1]);
		$('#answer3').text(trivia.quesFour.answers[2]);
		$('#answer4').text(trivia.quesFour.answers[3]);

		setTimeout(questionFive, 3000);
	}

	function questionFive() {

		$('#question').text(trivia.quesFive.question);
		$('#answer1').text(trivia.quesFive.answers[0]);
		$('#answer2').text(trivia.quesFive.answers[1]);
		$('#answer3').text(trivia.quesFive.answers[2]);
		$('#answer4').text(trivia.quesFive.answers[3]);

		setTimeout(questionSix, 3000);
	}

	function questionSix() {

		$('#question').text(trivia.quesSix.question);
		$('#answer1').text(trivia.quesSix.answers[0]);
		$('#answer2').text(trivia.quesSix.answers[1]);
		$('#answer3').text(trivia.quesSix.answers[2]);
		$('#answer4').text(trivia.quesSix.answers[3]);

		setTimeout(questionSeven, 3000);
	}

	function questionSeven() {

		$('#question').text(trivia.quesSeven.question);
		$('#answer1').text(trivia.quesSeven.answers[0]);
		$('#answer2').text(trivia.quesSeven.answers[1]);
		$('#answer3').text(trivia.quesSeven.answers[2]);
		$('#answer4').text(trivia.quesSeven.answers[3]);

		setTimeout(questionEight, 3000);
	}

	function questionEight() {

		$('#question').text(trivia.quesEight.question);
		$('#answer1').text(trivia.quesEight.answers[0]);
		$('#answer2').text(trivia.quesEight.answers[1]);
		$('#answer3').text(trivia.quesEight.answers[2]);
		$('#answer4').text(trivia.quesEight.answers[3]);

		setTimeout(questionEight, 3000);
	}

	function questionNine() {

		$('#question').text(trivia.quesNine.question);
		$('#answer1').text(trivia.quesNine.answers[0]);
		$('#answer2').text(trivia.quesNine.answers[1]);
		$('#answer3').text(trivia.quesNine.answers[2]);
		$('#answer4').text(trivia.quesNine.answers[3]);

		setTimeout(questionTen, 3000);
	}

	function questionTen() {

		$('#question').text(trivia.quesTen.question);
		$('#answer1').text(trivia.quesTen.answers[0]);
		$('#answer2').text(trivia.quesTen.answers[1]);
		$('#answer3').text(trivia.quesTen.answers[2]);
		$('#answer4').text(trivia.quesTen.answers[3]);

		setTimeout(score, 3000);
	}

	function score() {
		$('#answer1').text('Correct Answers: ' + correct);
		$('#answer2').text('Incorrect Answers: ' + incorrect);
		$('#answer3').text('Unanswered: ' + unanswered);
		setTimeout(questionOne, 3000);
	}

});