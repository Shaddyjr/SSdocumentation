function setup(){
	createCanvas(100,100);
	background(100);
}
function draw(){
	
	//thin red line
	strokeWeight(1);
	stroke(255,0,0);
	line(25,25,25,75);

	//thick blue line
	stroke(0,0,225);
	strokeWeight(4);
	line(75,25,75,75);
}