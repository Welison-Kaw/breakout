$(document).ready(function(){

	var ball = {
		moveX: function() {
			x += x;
		},
		moveY: function() {
			y += y;
		},
		changeDirectionX: function() {
			directionX *= -1;
		},
		changeDirectionY: function() {
			directionY *= -1;
		},
		apply: function() {
			this.obj.css('left', this.x);
			this.obj.css('top', this.y);		
		}

		ball() {
			x: 20,
			y: 30,
			directionX: 1,
			directionY: 1,
			obj: $('#ball') 			
		}
	}

	var ball = new ball();


	// var tempo = 10;
	// var incremento = 1;
	// var _timer = setTimeout(move, tempo);
	var maxY = 100;
	var maxX = 150;
	// var atualY = 20;
	// var atualX = 30;
	// var direcaoX = 1;
	// var direcaoY = 1;
	//var bola = $('#ball');

	$('#field').css('height', maxY);
	$('#field').css('width', maxX);



	// function move() {
	// 	console.log('teste');
	// 	_timer = setTimeout(move, tempo);
	// 	if (atualX >= maxX-5 && direcaoX == 1) {
	// 		direcaoX = -1
	// 	} else if (atualX+5 <= 0 && direcaoX == -1) {
	// 		direcaoX = 1
	// 	}

	// 	if (atualY >= maxY-5 && direcaoY == 1) {
	// 		direcaoY = -1
	// 	} else if (atualY+5 <= 0 && direcaoY == -1) {
	// 		direcaoY = 1
	// 	}
		
	// 	atualX += incremento * direcaoX;
	// 	atualY += incremento * direcaoY;

	// 	bola.css('left', atualX);
	// 	bola.css('top', atualY);
	// }
})

