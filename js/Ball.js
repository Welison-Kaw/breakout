class Ball {
	constructor (x, y, increment, limitX, limitY, velocity, parent) {
		this._x = x;
		this._y = y;
		this._increment = increment;
		this._directionX = 1;
		this._directionY = 1;
		this._limitX = limitX;
		this._limitY = limitY;
		this._velocity = velocity;
		this._timer = null;
		this._parent = parent;

		this._objBall = document.createElement("canvas");
		this._objBall.style.position = 'absolute';
		document.body.insertBefore(this._objBall, null);

		// console.log('x');
		console.log(this._parent.x);
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
		// var ctx = document.getElementById("ball").getContext("2d");
		var ctx = this._objBall.getContext("2d");
		ctx.beginPath();
		ctx.clearRect(this._x-5,this._y-5,10, 10);
		// console.log('X1:' + (this._x-4) + ' | Y1: ' + (this._y-4) + ' | X2: ' + (this._x+4) + ' | Y2: ' + (this._y+4));

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

		//this._timer = setTimeout(this.move.bind(this), this._velocity);
		ctx.arc(this._x,this._y,5,0,Math.PI*2);
		ctx.fill();		
		this._timer = requestAnimationFrame(this.move.bind(this));
	}
}