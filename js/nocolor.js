function setup(){
	createCanvas(100,100);
}
function draw(){
	background(100);

	stroke(0,255,0); //green lines
	strokeWeight(3); //3 pixel width for lines
	noFill(); //Shapes without filling
	ellipse(25,25, 50,50);

	fill(255,0,0); //added filling
	strokeWeight(0); //removing lines
	rect(50, 50, 30, 30);

}