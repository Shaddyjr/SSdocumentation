var circleX, squareX; //global variables must be defined outside of setup() and draw().

function setup(){
	createCanvas(100,100);
	circleX = 0;
	squareX = 100;
}
function draw(){
	background(100);

	//red circle moves right
	fill(225,0,0);
	ellipse(circleX,25, 30,30);
	circleX += 1;

	//blue square moves left
	fill(0,0,225);
	rect(squareX, 50, 30, 30);
	squareX -= 1;

	//yellow circle does not move
	fill(225,225,0);
	ellipse(50,50,30,30);

}