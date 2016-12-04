function setup(){
	createCanvas(100,100);
}
function draw(){

	background(255,0,0); //red background

	fill(0,0,255); //blue fill
	ellipse(25,25, 50,50);

	fill(random(255),random(255),random(255)); //random colors
	stroke(0,255,0); //green lines
	rect(50, 50, 30, 30);

}