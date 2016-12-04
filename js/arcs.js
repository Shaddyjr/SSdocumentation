function setup(){
	createCanvas(100,100);
	background(100);
}
function draw(){
	
	//red arc
	fill(225,0,0);
	arc(50, 55, 50, 50, 0, HALF_PI); //starts at 0 degrees, and ends at HALF-PI, or 90 degrees.
	
	//blue arc
	fill(0,0,225);
	arc(50, 55, 60, 60, HALF_PI, PI); //starts at HALF_PI, or 90 degrees, and ends at PI, or 180 degrees. 
	
	//blank arc
	noFill();
	arc(50, 55, 70, 70, PI, PI+QUARTER_PI); //starts at PI, or 180 degrees, and ends at PI+QUARTER_PI, or 90+45 degrees = 135 degrees.
}