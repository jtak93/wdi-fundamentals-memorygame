var gameBoard = document.getElementById('game-board');
var cardCount = 4;
/*for (var i=1; i<=cardCount; i++){
	var newDivItem = document.createElement('div');
	newDivItem.className = 'card';
	document.getElementById('game-board').appendChild(newDivItem);
};*///function also creates cards?

var createBoard = function(){
	for (var i=0; i<4; i++){
		var newDivItem = document.createElement('div');
		newDivItem.className = 'card';
		document.getElementById('game-board').appendChild(newDivItem);
	};
}
createBoard();
var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour= "king";

/*if (cardOne === cardTwo) {
	alert("You found a match!");
} else{
	alert("Sorry, try again");
}

if (cardOne === cardThree) {
	alert("You found a match!");
} else{
	alert("Sorry, try again");
}

if (cardOne === cardFour) {
	alert("You found a match!");
} else{
	alert("Sorry, try again");
}

if (cardTwo === cardThree) {
	alert("You found a match!");
} else{
	alert("Sorry, try again");
}

if (cardTwo === cardFour) {
	alert("You found a match!");
} else{
	alert("Sorry, try again");
}

if (cardThree === cardFour) {
	alert("You found a match!");
} else{
	alert("Sorry, try again");
}

Commented out for later use*/



