// $(document).ready(function() {
//global variables
//==========================================//
var numberList = []; //list of numbers to get numberToReach from
var numberToReach = "";
var crystalList = [];
var redCrystalValue = "";
var blueCrystalValue = "";
var greenCrystalValue = "";
var yellowCrystalValue = "";

// game counters
var counter=0;
var winCounter = 0;
var lossCounter = 0;



// function startGame(){
// this creates the list of numbers from 19 through 120 
	var numberList = [];
		for(var i=19; i<=120; i++){
			numberList.push(i);
		}
	var numberToReach = numberList[Math.floor(Math.random() * numberList.length)];
	// console.log(numberToReach); //selected number to reach
	//this creates the list of crystal values from 1 through 12
	var crystalList = [];
		for(var i=1; i<=12; i++){
			crystalList.push(i);
		};

		//this creates the objects of the crystals
	var redCrystal = $('<img>');
		redCrystal.attr('data-num', crystalList[i]);
		redCrystal.attr('src', 'assets/images/red.png');
		redCrystal.attr('alt', 'red crystal');
		redCrystal.addClass('center-block');
		redCrystal.addClass('crystalImage');
		$('#redCrystal').append(redCrystal);

	var blueCrystal = $('<img>');
		blueCrystal.attr('data-num', crystalList[i]);
		blueCrystal.attr('src', 'assets/images/blue.png');
		blueCrystal.attr('alt', 'blue crystal');
		blueCrystal.addClass('center-block');
		blueCrystal.addClass('crystalImage');
		$('#blueCrystal').append(blueCrystal);


	var yellowCrystal = $('<img>');
		yellowCrystal.attr('data-num', crystalList[i]);
		yellowCrystal.attr('src', 'assets/images/yellow.png');
		yellowCrystal.attr('alt', 'yellow crystal');
		yellowCrystal.addClass('center-block');
		yellowCrystal.addClass('crystalImage');
		$('#yellowCrystal').append(yellowCrystal);

	var greenCrystal = $('<img>');
		greenCrystal.attr('data-num', crystalList[i]);
		greenCrystal.attr('src', 'assets/images/green.png');
		greenCrystal.attr('alt', 'green crystal');
		greenCrystal.addClass('center-block');
		greenCrystal.addClass('crystalImage');
		$('#greenCrystal').append(greenCrystal);

	//this places te numberToReach on the html page
	$('#randomNumber').text(numberToReach);
	// assigns random number to crystal values
	var redCrystalValue = crystalList[Math.floor(Math.random() * crystalList.length)];

	console.log(redCrystalValue);

	var blueCrystalValue = crystalList[Math.floor(Math.random() * 
		crystalList.length)];

		console.log(blueCrystalValue);

	var yellowCrystalValue = crystalList[Math.floor(Math.random() * crystalList.length)];

		console.log(yellowCrystalValue);

	var greenCrystalValue = crystalList[Math.floor(Math.random() * crystalList.length)];

		console.log(greenCrystalValue);


// startGame();

//click events for each crystal

	$('#redCrystal').on('click', function () {
	 	counter = counter + redCrystalValue;

	 	$('#userTotalScore').text(counter);
	 	if(counter == numberToReach){
	 		winCounter++;
			alert('FANTASTIC! You are a winner! :]');
			$('#wins').html(winCounter);
			$('#randomNumber').text(numberToReach);
		}else if(counter > numberToReach){
			lossCounter++;
			alert('OH DARN! You did not win! :[');
			$('#losses').html(lossCounter);
			$('#randomNumber').text(numberToReach);
		};
	})

	$('#blueCrystal').on('click', function () {
	 	counter = counter + blueCrystalValue;
	 	$('#userTotalScore').text(counter);
	 	if(counter == numberToReach){
	 		winCounter++;
			alert('FANTASTIC! You are a winner! :]');
			$('#wins').html(winCounter);
			$('#randomNumber').text(numberToReach);
		}else if(counter > numberToReach){
			lossCounter++;
			alert('OH DARN! You did not win! :[');
			$('#losses').html(lossCounter);
			$('#randomNumber').text(numberToReach);
		};
	})
	$('#yellowCrystal').on('click', function () {
	 	counter = counter + yellowCrystalValue;

	 	$('#userTotalScore').text(counter);
	 	if(counter == numberToReach){
	 		winCounter++;
			alert('FANTASTIC! You are a winner! :]');
			$('#wins').html(winCounter);
			$('#randomNumber').text(numberToReach);
		}else if(counter > numberToReach){
			lossCounter++;
			alert('OH DARN! You did not win! :[');
			$('#losses').html(lossCounter);
			$('#randomNumber').text(numberToReach);
		};
	})
	$('#greenCrystal').on('click', function () {
	 	counter = counter + greenCrystalValue;

	 	$('#userTotalScore').text(counter);
	 	if(counter == numberToReach){
	 		winCounter++;
			alert('FANTASTIC! You are a winner! :]');
			$('#wins').html(winCounter);
			$('#randomNumber').text(numberToReach);
		}else if(counter > numberToReach){
			lossCounter++;
			alert('OH DARN! You did not win! :[');
			$('#losses').html(lossCounter);
			$('#randomNumber').text(numberToReach);
		};
	})
	$('#userTotalScore').text(counter);
	 	if(counter == numberToReach){
	 		winCounter++;
			alert('FANTASTIC! You are a winner! :]');
			$('#wins').html(winCounter);
			$('#randomNumber').text(numberToReach);
		}else if(counter > numberToReach){
			lossCounter++;
			alert('OH DARN! You did not win! :[');
			$('#losses').html(lossCounter);
			$('#randomNumber').text(numberToReach);
		};
	// });
// });




	




