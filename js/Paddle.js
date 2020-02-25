class Paddle {
	// declara propriedades
	#position = null;	
	#width = null;
	#height = null;
	#margin = null;
	#moveA = null;
	#moveB = null;

	constructor (position, width, height, margin, moveA, moveB) {
		this.#position = position;
		this.#width = width;
		this.#height = height;
		this.#margin = margin;
		this.#moveA = moveA;
		this.#moveB = moveB;
	}
}