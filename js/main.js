$(document).ready(function(){
	var cage = new Cage(100,100,250,200);
	cage.addBall(70,100,1,1);
	// cage.addBall(107,50,-1,1);
	// cage.addBall(77,90,1,-1);
	// cage.addBall(50,55,-1,-1);

	//cage.addPaddle(position, width, height, margin, moveA, moveB);
	// cage.addPaddle(1, 70, 5, 5, null, null, this);
	// cage.addPaddle(2, 70, 5, 5, null, null, this);
	cage.addBottomPaddle(70, 5, 15, null, null, this);
	// cage.addPaddle(4, 70, 5, 5, null, null, this);
})

