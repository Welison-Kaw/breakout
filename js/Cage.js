class Cage {
	// declara propriedades
	#x = null;
	#y = null;
	#width = null;
	#height = null;
	#objCage = null;
	#ball = [];
	// #paddle = [];
	#topPaddle = null;
	#rightPaddle = null;
	#bottomPaddle = null;
	#leftPaddle = null;

	constructor (x, y, width, height) {
		// define propriedades
		this.#x = x;
		this.#y = y;
		this.#width = width;
		this.#height = height;

		// cria elemento no body
		this.#objCage = document.createElement("canvas");
		this.#objCage.style.position = 'absolute';
		this.#objCage.width = width+x+10;
		this.#objCage.height = height+y+10;
		document.body.insertBefore(this.#objCage, null);

		// desenha jaula
		this.draw();
	}

	draw() {
		var ctx = this.#objCage.getContext('2d')
		ctx.beginPath();
		ctx.rect(this.#x,this.#y,this.#width,this.#height);
		ctx.stroke();
	}

	// getters
	get x() {
		return this.#x;
	}

	get y() {
		return this.#y;
	}

	get width() {
		return this.#width;
	}

	get height() {
		return this.#height;
	}

	get topPaddle() {
		return this.#topPaddle;
	}

	get rightPaddle() {
		return this.#rightPaddle;
	}

	get bottomPaddle() {
		return this.#bottomPaddle;
	}

	get leftPaddle() {
		return this.#leftPaddle;
	}

	// método para adicionar uma nova bola
	addBall(x, y, directionX, directionY) {
		this.#ball.push(new Ball(this.#x+x, this.#y+y, 1, directionX, directionY, 20, this));
		this.#ball[this.#ball.length-1].move();
	}

	// addPaddle(position, width, height, margin, moveA, moveB) {
	// 	this.#paddle.push(new Paddle(position, width, height, margin, moveA, moveB, this));
	// }

	addTopPaddle(width, height, margin, moveA, moveB) {
		this.#topPaddle = new Paddle(1, width, height, margin, moveA, moveB, this);
	}

	addRightPaddle(width, height, margin, moveA, moveB) {
		this.#rightPaddle = new Paddle(2, width, height, margin, moveA, moveB, this);
	}

	addBottomPaddle(width, height, margin, moveA, moveB) {
		this.#bottomPaddle = new Paddle(3, width, height, margin, moveA, moveB, this);
	}

	addLeftPaddle(width, height, margin, moveA, moveB) {
		this.#leftPaddle = new Paddle(4, width, height, margin, moveA, moveB, this);
	}

}