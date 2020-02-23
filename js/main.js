$(document).ready(function(){


	var height = 100;
	var width = 150;
	var tempo = 10;
	var objBall = $('#ball');
	var velocity = $('#velocity').val();

	var objCage = document.getElementById("cage");

	var cage = new Cage(10,10,150,100);

	// var ctx = document.getElementById("ball").getContext("2d");
	// ctx.beginPath();
	// ctx.arc(35,45,5,0,Math.PI*2);
	// ctx.fill();

	// var ball = new Ball(35, 45, 1, width, height, velocity, objBall);
	// ball.move();

	// $('#cage').css('height', height);
	// $('#cage').css('width', width);


	// $('#velocity').change(function() {
	// 	console.log($(this).val());
	// })

	// $('#ballSize').change(function(){
	// 	console.log($(this).val());
	// })

})

