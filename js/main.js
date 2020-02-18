$(document).ready(function(){

	var maxY = 100;
	var maxX = 150;
	var tempo = 10;
	var objBall = $('#ball');
	var velocity = $('#velocity').val();

	var ctx = document.getElementById("ball").getContext("2d");
	
	ctx.beginPath();
	ctx.arc(35,45,5,0,Math.PI*2);
	ctx.fill();

	var ball = new Ball(35, 45, 1, maxX, maxY, velocity, objBall);

	ball.move();

	$('#field').css('height', maxY);
	$('#field').css('width', maxX);

	$('#velocity').change(function() {
		console.log($(this).val());
	})

	$('#ballSize').change(function(){
		console.log($(this).val());
	})

})

