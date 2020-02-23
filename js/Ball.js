class Ball {
	// declara propriedades
	#x = null;
	#y = null;
	#increment = null;
	#directionX = null;
	#directionY = null;
	#limitX = null;
	#limitY = null;
	#velocity = null;
	#radius = null;
	#timer = null;
	#parent = null;
	#objBall = null;

	constructor (x, y, increment, velocity, directionX, directionY, radius, parent) {
		// define propriedades
		this.#x = x;
		this.#y = y;
		this.#increment = increment;
		this.#directionX = directionX;
		this.#directionY = directionY;
		this.#velocity = velocity;
		this.#radius = radius;
		this.#timer = null;
		this.#parent = parent; // objeto jaula
		this.#limitX = this.#parent.width + this.#parent.x; // limite da jaula em largura
		this.#limitY = this.#parent.height + this.#parent.y; // limite da jaula em altura

		// Cria o elemento no body
		this.#objBall = document.createElement("canvas");
		this.#objBall.style.position = 'absolute';
		this.#objBall.width = this.#parent.width+this.#parent.x+10;
		this.#objBall.height = this.#parent.height+this.#parent.y+10;

		document.body.insertBefore(this.#objBall, null);
	}

	// getters
	get x() {
		return this.#x;
	}

	get y() {
		return this.#y;
	}

	get directionX() {
		return this.#directionX;
	}

	get directionY() {
		return this.#directionY;
	}


	// métodos para mudar a direção da bola
	changeDirectionX() {
		this.#directionX *= -1;
	}

	changeDirectionY() {
		this.#directionY *= -1;
	}

	// método recursivo que move a bola
	move() {
		var ctx = this.#objBall.getContext("2d");
		ctx.beginPath();
		ctx.clearRect(this.#x-this.#radius,this.#y-this.#radius,this.#radius*2,this.#radius*2);

		if ((this.#x + this.#increment-2 > this.#limitX-this.#radius   && this.#directionX ==   1) ||
			(this.#x - this.#increment+2 < this.#parent.x+this.#radius && this.#directionX == - 1)) {
				this.#directionX *= -1;
		}

		if ((this.#y + this.#increment-2 > this.#limitY-this.#radius   && this.#directionY ==   1) ||
			(this.#y - this.#increment+2 < this.#parent.y+this.#radius && this.#directionY == - 1)) {
				this.#directionY *= -1;
		}

		this.#x += this.#increment * this.#directionX;
		this.#y += this.#increment * this.#directionY;

		ctx.arc(this.#x,this.#y,this.#radius,0,Math.PI*2);
		ctx.fill();		
		this.#timer = requestAnimationFrame(this.move.bind(this));
	}
}