class Player {

	constructor() {
		this.score = 0;
		this.gravity = 0.2;
		this.velocity = 0;
		this.width = 100;
		this.height = 140;
		this.x = 0;
		this.y = height - this.height;
	}

	draw() {
		// console.log('drawing the player 🙃')
		// this pushes the player down
		this.velocity += this.gravity;
		this.y += this.velocity;
		// if the bb8 moves lower than the ground
		if (this.y >= height - this.height) {
			// then he should be set to it's starting position
			this.y = height - this.height;
		}
		image(game.playerImage, this.x, this.y, this.width, this.height);

	}

	jump() {
		console.log('jump', this.velocity);
		this.velocity = - 12;
	}
}