$(document).ready(function(){

	var maxY = 100;
	var maxX = 150;
	var tempo = 10;
	var objBall = $('#ball');
	var _timer = setTimeout(move, tempo);
	
	var ball = new Ball(35, 45, 1, maxX, maxY);

	$('#field').css('height', maxY);
	$('#field').css('width', maxX);

	function move() {
		ball.move();
		objBall.css('left', ball.x);
		objBall.css('top', ball.y);
		_timer = setTimeout(move, tempo);
	}
})

