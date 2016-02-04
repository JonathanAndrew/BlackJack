/*
Project Name: BlackJack
Client: Me
Author: Jonathan Andrew
Developer @GA in Seattle
*/

$(document).ready(function(){
 var playerTotal=0;
 var computerTotal=0;
 var playerCount = 0;
var computerCount = 0;
var tieCount = 0;
var bets = 0;
var currentMoney = 0;
var playerHand = [];
var computerHand = [];

	$('#enter').on('click', function(){
		$('#enter').hide();
		// $('#deal').show();
		$('#outsideLuxor').hide();
		$('#insideLuxor').show();
		$('#board').show();
		$('#betMore').removeClass('hide');
		$('#betLess').removeClass('hide');
		$('#betCounter').removeClass('hide');
		$('#wonMoney').removeClass('hide');
		$('#money').removeClass('hide');
		$('#moneyTitle').removeClass('hide');
		$('#bet').removeClass('hide');
		$('#flashingBox').addClass('hide');
	});

	$('#betMore').on('click',function(){
		bets++;
		$('#betCounter').html('<span>' + "$" + bets + '</span>');
	});

	$('#bet').on('click', function(){
		currentMoney = parseInt($('#money').text());
		console.log(bets);
		console.log(currentMoney);
		$('#money').html('<span>' + (currentMoney - bets) + '</span>');
		$('#bet').attr("disabled", true);

	});
		
		//set new variable as the current value of the money div

		//going to set currentMoney as current value variable minus one

		//value of the money div to equal currentMoney
	

	$('#betLess').on('click',function(){
		bets--;
		$('#betCounter').html('<span>' + "$" + bets + '</span>');
	});

console.log(bets);

	

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
		// console.log(card);
		return card;

	};

var newCard = getCard();

$('#deal').on('click',function(){
	$('#deal').hide();
	$('#hit').show();
	$('#stand').show();
	$('#cover').show();
	$('#cover2').show();
	$('#bets').hide();
	playerTotal=0;
	computerTotal=0;
	playerTotal+=newCard.value
	$('#playerCard').html('<span class="card-value1" data-value="'+ newCard.value +'">'+ newCard.value + '</span>'+ '<span class="suit1">' + newCard.suit + '</span>' + '<span class="card-value2">'+ newCard.value + '</span>' + '<span class="suit2">' + newCard.suit + '</span>');
	playerHand.push($("#playerCard"));
	console.log(playerCard);
	newCard = getCard();
	playerTotal+=newCard.value
	$('#playerCardTwo').html('<span class="card-value1" data-value="'+ newCard.value +'">'+ newCard.value + '</span>'+ '<span class="suit1">' + newCard.suit + '</span>' + '<span class="card-value2">'+ newCard.value + '</span>' + '<span class="suit2">' + newCard.suit + '</span>');
	newCard = getCard();
	computerTotal+=newCard.value
	$('#computerCard').html('<span class="computer-card-value1" data-value="'+ newCard.value +'">' + newCard.value + '</span>'+ '<span class="computer-suit1">' + newCard.suit + '</span>' + '<span class="computer-card-value2">'+ newCard.value + '</span>' + '<span class="computer-suit2">' + newCard.suit + '</span>');
	newCard = getCard();
	computerTotal+=newCard.value
	$('#computerCardTwo').html('<span class="computer-card-value1" data-value="'+ newCard.value +'">'+ newCard.value + '</span>'+ '<span class="computer-suit1">' + newCard.suit + '</span>' + '<span class="computer-card-value2">'+ newCard.value + '</span>' + '<span class="computer-suit2">' + newCard.suit + '</span>');
	$('#cover2').html('<span class="cover2">'+'</span>');
	

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
	// $('#playerCardThree').show();
	$('#playerCardThree').show();
	$('#playerCardThree').html('<span class="card-value1" data-value="'+ newCard.value +'">'+ newCard.value + '</span>'+ '<span class="suit1">' + newCard.suit + '</span>' + '<span class="card-value2">'+ newCard.value + '</span>' + '<span class="suit2">' + newCard.suit + '</span>');
	playerTotal+=newCard.value
	} else if (counter == 4){
		$('#playerCardFour').show();
		$('#playerCardFour').html('<span class="card-value1" data-value="'+ newCard.value +'">'+ newCard.value + '</span>'+ '<span class="suit1">' + newCard.suit + '</span>' + '<span class="card-value2">'+ newCard.value + '</span>' + '<span class="suit2">' + newCard.suit + '</span>');
		playerTotal+=newCard.value
	}else if (counter == 5){
		$('#playerCardFive').show();
		$('#playerCardFive').html('<span class="card-value1" data-value="'+ newCard.value +'">'+ newCard.value + '</span>'+ '<span class="suit1">' + newCard.suit + '</span>' + '<span class="card-value2">'+ newCard.value + '</span>' + '<span class="suit2">' + newCard.suit + '</span>');
		playerTotal+=newCard.value
	}else if (counter == 6){
		$('#playerCardSix').show();
		$('#playerCardSix').html('<span class="card-value1" data-value="'+ newCard.value +'">'+ newCard.value + '</span>'+ '<span class="suit1">' + newCard.suit + '</span>' + '<span class="card-value2">'+ newCard.value + '</span>' + '<span class="suit2">' + newCard.suit + '</span>');
		playerTotal+=newCard.value
	}else if (counter == 7){
		$('#playerCardSeven').show();
		$('#playerCardSeven').html('<span class="card-value1" data-value="'+ newCard.value +'">'+ newCard.value + '</span>'+ '<span class="suit1">' + newCard.suit + '</span>' + '<span class="card-value2">'+ newCard.value + '</span>' + '<span class="suit2">' + newCard.suit + '</span>');
		playerTotal+=newCard.value
	};


	$('#playerScore').html('<div>' + playerTotal + '</div>');
	$('#computerScore').html('<div>' + computerTotal + '</div>');

});

$('#reset').on('click',function(){
	console.log('hello');
	counter = 2;
	$('#reset').hide();
	$('#deal').show();
	$('#bets').show();
	$('#bet').attr("disabled", false);
	myDeck = getDeck();
	$('#playerCard span').html(' ');
	$('#playerCardTwo span').html(' ');
	$('#playerCardThree').hide();
	$('#playerCardThree span').html(' ');
	$('#playerCardFour').hide();
	$('#playerCardFour span').html(' ');
	$('#playerCardFive').hide();
	$('#playerCardFive span').html(' ');
	$('#playerCardSix').hide();
	$('#playerCardSix span').html(' ');
	$('#playerCardSeven').hide();
	$('#playerCardSeven span').html(' ');
	$('#computerCard span').html(' ');
	$('#computerCardTwo span').html(' ');
	$('#computerCardThree').hide();
	$('#computerCardThree span').html(' ');
	$('#computerCardFour').hide();
	$('#computerCardFour span').html(' ');
	$('#computerCardFive').hide();
	$('#computerCardFive span').html(' ');
	$('#computerCardSix').hide();
	$('#computerCardSix span').html(' ');
	$('#computerCardSeven').hide();
	$('#computerCardSeven span').html(' ');
	$('#playerScore div').html(' ');
	$('#computerScore div').html(' ');
});

function checkComputerScore(){
	if(computerTotal < 17){
		return true;
	};
};

	$('#stand').on('click',function(){
		$('#stand').hide();
		$('#reset').show();
		$("#cover").hide();
		$('#cover2').hide();
		console.log("inside stand");
		newCard = getCard();
		$('#hit').hide();
	if(checkComputerScore() === true){
		$('#computerCardThree').show();
		$('#computerCardThree').html('<span class="card-value1" data-value="'+ newCard.value +'">'+ newCard.value + '</span>'+ '<span class="suit1">' + newCard.suit + '</span>' + '<span class="card-value2">'+ newCard.value + '</span>' + '<span class="suit2">' + newCard.suit + '</span>');
		computerTotal+=newCard.value
		$('#computerScore').html('<div>' + computerTotal + '</div>');
		checkComputerScore();
	}if(checkComputerScore() === true){

		$('#computerCardFour').show();
		$('#computerCardFour').html('<span class="card-value1" data-value="'+ newCard.value +'">'+ newCard.value + '</span>'+ '<span class="suit1">' + newCard.suit + '</span>' + '<span class="card-value2">'+ newCard.value + '</span>' + '<span class="suit2">' + newCard.suit + '</span>');
		computerTotal+=newCard.value
		$('#computerScore').html('<div>' + computerTotal + '</div>');
		checkComputerScore();
	}if(checkComputerScore() === true){

		$('#computerCardFive').show();
		$('#computerCardFive').html('<span class="card-value1" data-value="'+ newCard.value +'">'+ newCard.value + '</span>'+ '<span class="suit1">' + newCard.suit + '</span>' + '<span class="card-value2">'+ newCard.value + '</span>' + '<span class="suit2">' + newCard.suit + '</span>');
		computerTotal+=newCard.value
		$('#computerScore').html('<div>' + computerTotal + '</div>');
		checkComputerScore();
	}if(checkComputerScore() === true){

		$('#computerCardSix').show();
		$('#computerCardSix').html('<span class="card-value1" data-value="'+ newCard.value +'">'+ newCard.value + '</span>'+ '<span class="suit1">' + newCard.suit + '</span>' + '<span class="card-value2">'+ newCard.value + '</span>' + '<span class="suit2">' + newCard.suit + '</span>');
		computerTotal+=newCard.value
		$('#computerScore').html('<div>' + computerTotal + '</div>');
		checkComputerScore();
	}if(checkComputerScore() === true){

		$('#computerCardSeven').show();
		$('#computerCardSeven').html('<span class="card-value1" data-value="'+ newCard.value +'">'+ newCard.value + '</span>'+ '<span class="suit1">' + newCard.suit + '</span>' + '<span class="card-value2">'+ newCard.value + '</span>' + '<span class="suit2">' + newCard.suit + '</span>');
		computerTotal+=newCard.value
		$('#computerScore').html('<div>' + computerTotal + '</div>');
		checkComputerScore();
	};

	function compare(){
			console.log(playerTotal);
			console.log(computerTotal);
			var win = $('#win').hide();
			var lose = $('#lose').hide();
			var tie = $('#tie').hide();

			if(playerTotal <= 21 && playerTotal > computerTotal){
				console.log('Player Wins!');
				parseInt($("#money").text()) - bets;
				var wonBet = bets * 2;
				console.log(wonBet);
				$('#money').html('<span>' + (currentMoney + wonBet) + '</span>');
				setTimeout(function(){ win.html('<span>'+ 'YOU WIN' + "<br />" + 'You won: $ ' + wonBet +'</span>').show(); }, 500);
				setTimeout(function(){ win.hide(); }, 2000);
				bets = 0;
				$('#betCounter').html(bets);
				return 'Player';

			} else if(playerTotal <= 21 && computerTotal > 21){
				console.log('Player Wins!');
				var wonBet= bets * 2;
				console.log(wonBet);
				$('#money').html('<span>' + (currentMoney + wonBet) + '</span>');
				setTimeout(function(){ win.html('<span>'+ 'YOU WIN' + "<br />" + 'You won: $ ' + wonBet + '</span>').show(); }, 500);
				setTimeout(function(){ win.hide(); }, 2000);
				bets = 0;
				$('#betCounter').html(bets);
				return 'Player';

			} else if (playerTotal > 21 && computerTotal <= 21){
				setTimeout(function(){ lose.show(); }, 500);
				setTimeout(function(){ lose.hide(); }, 1500);
				console.log('Computer Wins!');
				bets = 0;
				$('#betCounter').html(bets);
				return 'Computer';

			} else if (computerTotal <= 21 && computerTotal > playerTotal){
				setTimeout(function(){ lose.show(); }, 500);
				setTimeout(function(){ lose.hide(); }, 1500);
				console.log('Computer Wins!');
				bets = 0;
				$('#betCounter').html(bets);
				return 'Computer';

			} else if (computerTotal <= 21 && playerTotal > 21){
				setTimeout(function(){ lose.show(); }, 500);
				setTimeout(function(){ lose.hide(); }, 1500);
				console.log('Compter Wins!');
				bets = 0;
				$('#betCounter').html(bets);
				return 'Computer';

			} else if (playerTotal > 21 && computerTotal > 21){
				console.log('Nobody Wins!');
				setTimeout(function(){ tie.show(); }, 500);
				setTimeout(function(){ tie.hide(); }, 1500);
				bets = 0;
				$('#betCounter').html(bets);
				return 'Nobody';

			} else if (playerTotal == computerTotal){
				setTimeout(function(){ tie.show(); }, 500);
				setTimeout(function(){ tie.hide(); }, 1500);
				console.log('tie!');
				bets = 0;
				$('#betCounter').html(bets);
				return 'tie';

			} else {
				console.log('hello');
			};
			
		};

		function wins(){
			
			var winner = compare();
			if(winner == 'Player'){
				playerCount++;
			} else if (winner == 'Computer'){
				computerCount++;
			} else{
				tieCount++
			};
			console.log("player wins: " + playerCount);
			console.log("computer wins: " +computerCount)
			$('#playerWins').html(playerCount);
			$('#computerWins').html(computerCount);
	};
		
	
		wins();

});
		


});