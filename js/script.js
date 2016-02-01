$(document).ready(function(){


	$('#enter').on('click', function(){
		$('#enter').addClass('hide');
		$('#outsideLuxor').addClass('hide');
		$('#insideLuxor').removeClass('hide');
		$('#board').removeClass('hide');
	});

	function deal(){

	var cards = ["ace-of-clubs","two-of-clubs","three-of-clubs",
		"four-of-clubs","five-of-clubs","six-of-clubs","seven-of-clubs",
		"eight-of-clubs","nine-of-clubs","ten-of-clubs","jack-of-clubs",
		"queen-of-clubs","king-of-clubs","ace-of-spades","two-of-spades",
		"three-of-spades","four-of-spades","five-of-spades","six-of-spades",
		"seven-of-spades","eight-of-spades","nine-of-spades","ten-of-spades",
		"jack-of-spades","queen-of-spades","king-of-spades","ace-of-hearts",
		"two-of-hearts","three-of-hearts","four-of-hearts","five-of-hearts",
		"six-of-hearts","seven-of-hearts","eight-of-hearts","nine-of-hearts",
		"ten-of-hearts","jack-of-hearts","queen-of-hearts","king-of-hearts",
		"ace-of-diamonds","two-of-diamonds","three-of-diamonds","four-of-diamonds",
		"five-of-diamonds","six-of-diamonds","seven-of-diamonds","eight-of-diamonds",
		"nine-of-diamonds","ten-of-diamonds","jack-of-diamonds","queen-of-diamonds",
		"king-of-diamonds"];

    /// Store correlating values in an array
    var values = [11,2,3,4,5,6,7,8,9,10,10,10,10,11,2,3,4,5,6,7,8,9,10,10,10,10,11,
    2,3,4,5,6,7,8,9,10,10,10,10,11,2,3,4,5,6,7,8,9,10,10,10,10];

    //random number
    var num = Math.floor(Math.random())*cards.length;

    // get player cards
    // $('#playerCard').html('<div>' + cards[num] + '</div>');





};

    // allow player to either hit or stand
    // get computer cards
    // computer must hit <17
    // compare

});