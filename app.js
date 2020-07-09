let currentPlayer = 'O';
let gameboard;
let selectedSquares = [];
let tieScore = 0;

const boxes = document.querySelectorAll('.box');

const startBtn = document.querySelector('#strBtn');
startBtn.addEventListener('click', handleStartBtn);

function checkWinCondition() {
	// checks for in conditions
}

function checkTieCondition() {
	// checks if there is a tie
}

function switchPlayers() {
	// switch between `x` and `o`
	if (currentPlayer === 'X') {
		currentPlayer = 'O';
	} else {
		currentPlayer = 'X';
	}
}


function checkBoxIsNotOccupied() {
	// determines if the game box that is clicked is empty
	boxes.forEach((box) => {
		if (box.innerText) {
			box.classList.add('clicked');
		}
	});
}
//checkBoxIsNotOccupied();
function startGame() {
	// starts or restarts a game
	const boxes = document.querySelectorAll('.box');
	boxes.forEach((box) => {
		box.addEventListener('click', gamePlay);
	});
}

function checkTie() {
	if (tieScore >= 9) {
		alert('Tie Game');
		startGame();
	}
}

function handleStartBtn() {
    boxes.forEach((box) => {
		if (box.innerText === '') {
            startGame();
        } else if (box.innerText !== '') {
            box.innerText = '';
            startGame();
        }
    })
}

function turnSequence() {
	// all the things that happen when a user takes a turn
}

function writeMessage(message) {
	// update the gameboard message with
	// let paragraph = document.createElement('p');
	// paragraph.innerText = message;
	// paragraph.setAttribute('',)
}
function gamePlay(event) {
	event.target.innerText = currentPlayer;
	tieScore++;
	switchPlayers();
    checkTie();
    checkBoxIsNotOccupied();
}
