class Cage {
	// declara propriedades
	#x = null;
	#y = null;
	#width = null;
	#height = null;
	#objCage = null;
	#ball = [];

	constructor (x, y, width, height) {
		// define propriedades
		this.#x = x;
		this.#y = y;
		this.#width = width;
		this.#height = height;

		// cria elemento no body
		this.#objCage = document.createElement("canvas");
		this.#objCage.style.position = 'absolute';
		this.#objCage.width = width+x+1;
		this.#objCage.height = height+y+1;
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

	// método para adicionar uma nova bola
	addBall(x, y, directionX, directionY) {
		this.#ball.push(new Ball(this.#x+x, this.#y+y, 1, 5, directionX, directionY, this));
		this.#ball[this.#ball.length-1].move();
	}
}