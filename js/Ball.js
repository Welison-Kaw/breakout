class Ball {
	constructor (x, y, increment, limitX, limitY, velocity) {
		this._x = x;
		this._y = y;
		this._increment = increment;
		this._directionX = 1;
		this._directionY = 1;
		this._limitX = limitX;
		this._limitY = limitY;
		this._velocity = velocity;
		this._timer = setTimeout(function() { this.move() }, 3000); // teste
	}

	get x() {
		return this._x;
	}

	get y() {
		return this._y;
	}

	get directionX() {
		return this._directionX;
	}

	get directionY() {
		return this._directionY;
	}

	changeDirectionX() {
		this._directionX *= -1;
	}

	changeDirectionY() {
		this._directionY *= -1;
	}

	move() {
		if ((this._x + this._increment > this._limitX && this._directionX ==   1) ||
			(this._x - this._increment < 0            && this._directionX == - 1)) {
				this._directionX *= -1;
		}

		if ((this._y + this._increment > this._limitY && this._directionY ==   1) ||
			(this._y - this._increment < 0            && this._directionY == - 1)) {
				this._directionY *= -1;
		}

		this._x += this._increment * this._directionX;
		this._y += this._increment * this._directionY;

		// this._timer = setTimeout(this.move(), this._velocity);

		console.log('move');
	}
}