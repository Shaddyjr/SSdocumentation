var circleY, squareY; //global variables must be defined outside of setup() and draw().

function setup(){
	createCanvas(100,100);
	circleY = 0;
	squareY = 100;
}
function draw(){
	background(100);

	//red circle moves down
	fill(225,0,0);
	ellipse(25,circleY, 30,30);
	circleY += 1;

	//blue square moves up
	fill(0,0,225);
	rect(50,squareY, 30, 30);
	squareY -= 1;

	//yellow circle does not move
	fill(225,225,0);
	ellipse(50,50,30,30);

}