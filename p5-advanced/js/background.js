class Background {
	draw() {
		// console.log('this is the background drawing');
		// console.log(width, height);
		game.backgroundImages.forEach(function (img) {
			img.x -= img.speed;
			image(img.src, img.x, 0, width, height);
			// here we need to add a second image - 
			image(img.src, img.x + width, 0, width, height);
			// if the image moves out of the screen then we need to reset it
			// to it's starting position
			if (img.x <= - width) {
				img.x = 0;
			}
		})
		// image(game.backgroundImages[0].src, 0, 0, width, height);
		// image(game.backgroundImages[1].src, 0, 0, width, height);
		// image(game.backgroundImages[2].src, 0, 0, width, height);
		// image(game.backgroundImages[3].src, 0, 0, width, height);
		// image(game.backgroundImages[4].src, 0, 0, width, height);
	}
}
