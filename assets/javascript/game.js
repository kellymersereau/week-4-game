$(document).ready(function() {
//global variables
//==========================================//

// this creates the list of numbers from 19 through 120 
var numberList = [];
	for(var i=19; i<=120; i++){
		numberList.push(i);
	}
var numberToReach = numberList[Math.floor(Math.random() * numberList.length)];
	// console.log(numberToReach); //selected number to reach
var counter = 0;
//this creates the list of crystal values from 1 through 12
var crystalList = [];
	for(var i=1; i<=12; i++){
		crystalList.push(i);
	};

// crystal values
var redCrystalValue = crystalList[Math.floor(Math.random() * crystalList.length)];

	console.log(redCrystalValue);

var blueCrystalValue = crystalList[Math.floor(Math.random() * 
	crystalList.length)];

	console.log(blueCrystalValue);

var yellowCrystalValue = crystalList[Math.floor(Math.random() * crystalList.length)];

	console.log(yellowCrystalValue);

var greenCrystalValue = crystalList[Math.floor(Math.random() * crystalList.length)];

	console.log(greenCrystalValue);

// game counters
var winCounter = 0
var lossCounter = 0

$('#randomNumber').text(numberToReach);

var redCrystal = $('<img>');
	redCrystal.attr('data-num', crystalList[i]);
	redCrystal.attr('src', 'assets/images/red.png');
	redCrystal.attr('alt', 'red crystal');
	redCrystal.addClass('crystalImage');
	$('#redCrystal').append(redCrystal);

var blueCrystal = $('<img>');
	blueCrystal.attr('data-num', crystalList[i]);
	blueCrystal.attr('src', 'assets/images/blue.png');
	blueCrystal.attr('alt', 'blue crystal');
	blueCrystal.addClass('crystalImage');
	$('#blueCrystal').append(blueCrystal);


var yellowCrystal = $('<img>');
	yellowCrystal.attr('data-num', crystalList[i]);
	yellowCrystal.attr('src', 'assets/images/yellow.png');
	yellowCrystal.attr('alt', 'yellow crystal');
	yellowCrystal.addClass('crystalImage');
	$('#yellowCrystal').append(yellowCrystal);




var greenCrystal = $('<img>');
	greenCrystal.attr('data-num', crystalList[i]);
	greenCrystal.attr('src', 'assets/images/green.png');
	greenCrystal.attr('alt', 'green crystal');
	greenCrystal.addClass('crystalImage');
	$('#greenCrystal').append(greenCrystal);



$('#redCrystal').on('click', function () {
 	counter = counter + redCrystalValue;

 	$('#userTotalScore').text(counter);
 	if(counter == numberToReach){
 		winCounter++;
		alert('FANTASTIC! You are a winner! :]');
		$('#wins').html(winCounter);
	}else if(counter > numberToReach){
		lossCounter++;
		alert('OH DARN! You did not win! :[');
		$('#losses').html(lossCounter);
	};
})

$('#blueCrystal').on('click', function () {
 	counter = counter + blueCrystalValue;
 	$('#userTotalScore').text(counter);
 	if(counter == numberToReach){
 		winCounter++;
		alert('FANTASTIC! You are a winner! :]');
		$('#wins').html(winCounter);
	}else if(counter > numberToReach){
		lossCounter++;
		alert('OH DARN! You did not win! :[');
		$('#losses').html(lossCounter);
	};
})
$('#yellowCrystal').on('click', function () {
 	counter = counter + yellowCrystalValue;

 	$('#userTotalScore').text(counter);
 	if(counter == numberToReach){
 		winCounter++;
		alert('FANTASTIC! You are a winner! :]');
		$('#wins').html(winCounter);
	}else if(counter > numberToReach){
		lossCounter++;
		alert('OH DARN! You did not win! :[');
		$('#losses').html(lossCounter);
	};
})
$('#greenCrystal').on('click', function () {
 	counter = counter + greenCrystalValue;

 	$('#userTotalScore').text(counter);
 	if(counter == numberToReach){
 		winCounter++;
		alert('FANTASTIC! You are a winner! :]');
		$('#wins').html(winCounter);
	}else if(counter > numberToReach){
		lossCounter++;
		alert('OH DARN! You did not win! :[');
		$('#losses').html(lossCounter);
	};
});
$('#userTotalScore').text(counter);
 	if(counter == numberToReach){
 		winCounter++;
		alert('FANTASTIC! You are a winner! :]');
		$('#wins').html(winCounter);
	}else if(counter > numberToReach){
		lossCounter++;
		alert('OH DARN! You did not win! :[');
		$('#losses').html(lossCounter);
	};
});




