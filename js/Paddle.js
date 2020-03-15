class Paddle {
	// declara propriedades
	#position = null;	
	#width = null;
	#height = null;
	#margin = null;
	#moveA = null;
	#moveB = null;
	#parent = null;
	#objPaddle = null;

	constructor (position, width, height, margin, moveA, moveB, parent) {
		this.#position = position;
		this.#width = width;
		this.#height = height;
		this.#margin = margin;
		this.#moveA = moveA;
		this.#moveB = moveB;
		this.#parent = parent;

		// Cria o elemento no body
		this.#objPaddle = document.createElement("canvas");
		this.#objPaddle.style.position = 'absolute';
		this.#objPaddle.width = this.#parent.width+this.#parent.x+10;
		this.#objPaddle.height = this.#parent.height+this.#parent.y+10;
		document.body.insertBefore(this.#objPaddle, null);

		var ctx = this.#objPaddle.getContext('2d')
		ctx.beginPath();

		switch(this.#position) {
			// position 1 - top
			case 1:
				ctx.rect(this.#parent.x+((this.#parent.width-this.#width)/2),
						this.#parent.y+this.#margin,
						this.#width,
						this.#height);
				break;

			// position 2 - right
			case 2:
				ctx.rect(this.#parent.x+this.#parent.width-this.#height-this.#margin,
						this.#parent.y+((this.#parent.height-this.#width)/2),
						this.#height,
						this.#width);
				break;

			// position 3 - bottom
			case 3:
				ctx.rect(this.#parent.x+((this.#parent.width-this.#width)/2),
						this.#parent.y+this.#parent.height-this.#height-this.#margin,
						this.#width,
						this.#height);
				break;

			// position 4 - left
			case 4:
				ctx.rect(this.#parent.x+this.#margin,
						this.#parent.y+((this.#parent.height-this.#width)/2),
						this.#height,
						this.#width);
				break;
		}
		
		ctx.fill();

	}

	get x() {
		return this.#parent.y+this.#parent.height-this.#height-this.#margin;
	}

	// teste
	get position () {
		return 999;
	}
}