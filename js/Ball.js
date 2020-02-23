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


	constructor (x, y, increment, limitX, limitY, velocity, parent) {
		this.#x = x;
		this.#y = y;
		this.#increment = increment;
		this.#directionX = 1;
		this.#directionY = 1;
		this.#limitX = limitX;
		this.#limitY = limitY;
		this.#velocity = velocity;
		this.#timer = null;
		this.#parent = parent;

		this._objBall = document.createElement("canvas");
		this._objBall.style.position = 'absolute';
		document.body.insertBefore(this._objBall, null);

		// console.log('x');
		console.log(this.#parent);
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
		// var ctx = document.getElementById("ball").getContext("2d");
		var ctx = this._objBall.getContext("2d");
		ctx.beginPath();
		ctx.clearRect(this.#x-5,this.#y-5,10, 10);
		// console.log('X1:' + (this.#x-4) + ' | Y1: ' + (this.#y-4) + ' | X2: ' + (this.#x+4) + ' | Y2: ' + (this.#y+4));

		if ((this.#x + this.#increment > this.#limitX && this.#directionX ==   1) ||
			(this.#x - this.#increment < 0            && this.#directionX == - 1)) {
				this.#directionX *= -1;
		}

		if ((this.#y + this.#increment > this.#limitY && this.#directionY ==   1) ||
			(this.#y - this.#increment < 0            && this.#directionY == - 1)) {
				this.#directionY *= -1;
		}

		this.#x += this.#increment * this.#directionX;
		this.#y += this.#increment * this.#directionY;

		//this.#timer = setTimeout(this.move.bind(this), this.#velocity);
		ctx.arc(this.#x,this.#y,5,0,Math.PI*2);
		ctx.fill();		
		this.#timer = requestAnimationFrame(this.move.bind(this));
	}
}