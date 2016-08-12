//cards in the game
var cards = ['queen', 'queen', 'king', 'king'];
//cards in play
var cardsInPlay = [];
//allows us to access board element to add cards
var gameBoard = document.getElementById('game-board');
//function that creates board
var createBoard = function(){
	for (var i=0; i<cards.length; i++){
		var cardElement = document.createElement('div');
		cardElement.className = 'card';
		cardElement.setAttribute('data-card', cards[i]);
		cardElement.addEventListener('click', isTwoCards)
		document.getElementById('game-board').appendChild(cardElement);
	};
}

var isMatch = function(){
  // alert winning message
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");
  }
}

function isTwoCards(){
	cardsInPlay.push(this.getAttribute('data-card'));
	// show the card's image
	console.log(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') === 'king') {
		this.innerHTML = "<img src='king.png'>"; // king
	} else {
		this.innerHTML = "<img src='queen.png'>"; //queen
	}
  // if you have two cards in play check for a match
  if (cardsInPlay.length === 2) {
    // pass the cardsInPlay as an argument to isMatch function
    isMatch(cardsInPlay);
    // clear cards in play array for next try
    cardsInPlay = [];
  }
}
var resetButton = document.createElement("BUTTON");
document.body.appendChild(resetButton);

//function resetBoard
//runs board creation
createBoard();
