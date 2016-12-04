function setup(){
	createCanvas(100,100);
	background(100);
}
function draw(){
	//red text
	fill(225,0,0);
	textSize(10);
	text("Sample Text", 25,25);

	//blue text
	fill(0,0,225);
	textSize(20);
	text("More Text", 1,75);
}