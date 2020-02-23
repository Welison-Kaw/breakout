class Cage {
	#x = null;
	#y = null;
	#width = null;
	#height = null;
	#objCage = null;
	#ball = [];

	constructor (x, y, width, height) {
		this.#x = x;
		this.#y = y;
		this.#width = width;
		this.#height = height;

		this.#objCage = document.createElement("canvas");
		this.#objCage.style.position = 'absolute';
		document.body.insertBefore(this.#objCage, null);

		this.#ball.push(new Ball(this.#x+10, this.#y+10, 1, this.#width, this.#height, 5, this));
		this.#ball[0].move();

		this.draw();
	}

	draw() {
		var ctx = this.#objCage.getContext('2d')
		ctx.beginPath();
		ctx.rect(this.#x,this.#y,this.#width,this.#height);
		ctx.stroke();
	}

	get x() {
		return this.#x;
	}

	get y() {
		return this.#y;
	}

	get with() {
		return this.#width;
	}

	get height() {
		return this.#height;
	}
}