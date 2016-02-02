$(document).ready(function(){
 var playerTotal=0;
 var computerTotal=0;

	$('#enter').on('click', function(){
		$('#enter').addClass('hide');
		$('#deal').removeClass('hide');
		$('#outsideLuxor').addClass('hide');
		$('#insideLuxor').removeClass('hide');
		$('#board').removeClass('hide');
	});

	

	// initialize card object
	function card(value, name, suit) {
	    this.value = value;
	    this.name = name;
	    this.suit = suit;
	};
	// function to create decks of card objects
	function getDeck() {
	    this.names = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 
	'Q', 'K', 'A'];
	    this.suits = ['&clubs;', '&diams;', '&hearts;', '&spades;'];
	    var cards = [];
	    for(var i = 0; i < this.suits.length; i++) {
	        for(var j = 0; j < this.names.length; j++) {
	      var faceCards = j+2;
	      if(faceCards > 10){
	      	faceCards = 10;
	      }

	            cards.push(new card(faceCards, this.names[j], this.suits[i]));
	        }
	    }
	    return cards;

	};

	var myDeck = getDeck();
	

	function getCard(){
		var index = (Math.floor(Math.random()*myDeck.length));
		var card = myDeck[index];
		myDeck.splice(index, 1);
		console.log(card);
		return card;

	};

var newCard = getCard();

$('#deal').on('click',function(){
	playerTotal=0;
	computerTotal=0;
	playerTotal+=newCard.value
	$('#playerCard').html('<span class="card-value1" data-value="'+ newCard.value +'">'+ newCard.value + '</span>'+ '<span class="suit1">' + newCard.suit + '</span>' + '<span class="card-value2">'+ newCard.value + '</span>' + '<span class="suit2">' + newCard.suit + '</span>');
	newCard = getCard();
	playerTotal+=newCard.value
	$('#playerCardTwo').html('<span class="card-value1" data-value="'+ newCard.value +'">'+ newCard.value + '</span>'+ '<span class="suit1">' + newCard.suit + '</span>' + '<span class="card-value2">'+ newCard.value + '</span>' + '<span class="suit2">' + newCard.suit + '</span>');
	newCard = getCard();
	computerTotal+=newCard.value
	$('#computerCard').html('<span class="computer-card-value1" data-value="'+ newCard.value +'">'+ newCard.value + '</span>'+ '<span class="computer-suit1">' + newCard.suit + '</span>' + '<span class="computer-card-value2">'+ newCard.value + '</span>' + '<span class="computer-suit2">' + newCard.suit + '</span>');
	newCard = getCard();
	computerTotal+=newCard.value
	$('#computerCardTwo').html('<span class="computer-card-value1" data-value="'+ newCard.value +'">'+ newCard.value + '</span>'+ '<span class="computer-suit1">' + newCard.suit + '</span>' + '<span class="computer-card-value2">'+ newCard.value + '</span>' + '<span class="computer-suit2">' + newCard.suit + '</span>');
	

	console.log(playerTotal);
	console.log(computerTotal);
	$('#playerScore').html('<div>' + playerTotal + '</div>');
	$('#computerScore').html('<div>' + computerTotal + '</div>');
});



var counter = 2;
$('#hit').on('click',function(e){
	counter++;
	newCard = getCard();
	console.log("playerTotal before hit: " + playerTotal);
	if (counter == 3){
	$('#playerCardThree').removeClass('hide');
	$('#playerCardThree').html('<span class="card-value1" data-value="'+ newCard.value +'">'+ newCard.value + '</span>'+ '<span class="suit1">' + newCard.suit + '</span>' + '<span class="card-value2">'+ newCard.value + '</span>' + '<span class="suit2">' + newCard.suit + '</span>');
	playerTotal+=newCard.value
} else if (counter == 4){
	$('#playerCardFour').removeClass('hide');
	$('#playerCardFour').html('<span class="card-value1" data-value="'+ newCard.value +'">'+ newCard.value + '</span>'+ '<span class="suit1">' + newCard.suit + '</span>' + '<span class="card-value2">'+ newCard.value + '</span>' + '<span class="suit2">' + newCard.suit + '</span>');
	playerTotal+=newCard.value
}else if (counter == 5){
	$('#playerCardFive').removeClass('hide');
	$('#playerCardFive').html('<span class="card-value1" data-value="'+ newCard.value +'">'+ newCard.value + '</span>'+ '<span class="suit1">' + newCard.suit + '</span>' + '<span class="card-value2">'+ newCard.value + '</span>' + '<span class="suit2">' + newCard.suit + '</span>');
	playerTotal+=newCard.value
}else if (counter == 6){
	$('#playerCardSix').removeClass('hide');
	$('#playerCardSix').html('<span class="card-value1" data-value="'+ newCard.value +'">'+ newCard.value + '</span>'+ '<span class="suit1">' + newCard.suit + '</span>' + '<span class="card-value2">'+ newCard.value + '</span>' + '<span class="suit2">' + newCard.suit + '</span>');
	playerTotal+=newCard.value
}else if (counter == 7){
	$('#playerCardSeven').removeClass('hide');
	$('#playerCardSeven').html('<span class="card-value1" data-value="'+ newCard.value +'">'+ newCard.value + '</span>'+ '<span class="suit1">' + newCard.suit + '</span>' + '<span class="card-value2">'+ newCard.value + '</span>' + '<span class="suit2">' + newCard.suit + '</span>');
	playerTotal+=newCard.value
}
$('#playerScore').html('<div>' + playerTotal + '</div>');
$('#computerScore').html('<div>' + computerTotal + '</div>');

});

function checkComputerScore(){
	if(computerTotal < 17){
		return true;
	}
}

$('#stand').on('click',function(){
	console.log("inside stand");
	$('#hit').hide();
	if(checkComputerScore() === true){
		$('#computerCardThree').removeClass('hide');
		$('#computerCardThree').html('<span class="card-value1" data-value="'+ newCard.value +'">'+ newCard.value + '</span>'+ '<span class="suit1">' + newCard.suit + '</span>' + '<span class="card-value2">'+ newCard.value + '</span>' + '<span class="suit2">' + newCard.suit + '</span>');
		computerTotal+=newCard.value
		checkComputerScore();
	};
	

});





    // get player cards
    // $('#playerCard').html('<div>' + cards[num] + '</div>');



    // allow player to either hit or stand
    // get computer cards
    // computer must hit <17
    // compare

});