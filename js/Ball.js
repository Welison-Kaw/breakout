class Ball {
	#x = null;
	#y = null;
	#increment = null;
	#directionX = null;
	#directionY = null;
	#limitX = null;
	#limitY = null;
	#velocity = null;
	#timer = null;
	#parent = null;
	#objBall = null;

	constructor (x, y, increment, velocity, directionX, directionY, parent) {
		this.#x = x;
		this.#y = y;
		this.#increment = increment;
		this.#directionX = directionX;
		this.#directionY = directionY;
		this.#velocity = velocity;
		this.#timer = null;
		this.#parent = parent;
		this.#limitX = this.#parent.width + this.#parent.x;
		this.#limitY = this.#parent.height + this.#parent.y;

		this.#objBall = document.createElement("canvas");
		this.#objBall.style.position = 'absolute';
		this.#objBall.width = this.#parent.width+this.#parent.x+1;
		this.#objBall.height = this.#parent.height+this.#parent.y+1;

		document.body.insertBefore(this.#objBall, null);
	}

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

	changeDirectionX() {
		this.#directionX *= -1;
	}

	changeDirectionY() {
		this.#directionY *= -1;
	}

	move() {
		var ctx = this.#objBall.getContext("2d");
		ctx.beginPath();
		ctx.clearRect(this.#x-5,this.#y-5,10, 10);

		if ((this.#x + this.#increment > this.#limitX   && this.#directionX ==   1) ||
			(this.#x - this.#increment < this.#parent.x && this.#directionX == - 1)) {
				this.#directionX *= -1;
		}

		if ((this.#y + this.#increment > this.#limitY   && this.#directionY ==   1) ||
			(this.#y - this.#increment < this.#parent.y && this.#directionY == - 1)) {
				this.#directionY *= -1;
		}

		this.#x += this.#increment * this.#directionX;
		this.#y += this.#increment * this.#directionY;

		ctx.arc(this.#x,this.#y,5,0,Math.PI*2);
		ctx.fill();		
		this.#timer = requestAnimationFrame(this.move.bind(this));
	}
}