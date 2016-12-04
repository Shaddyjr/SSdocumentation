var myArray = ["cats","dogs","eels","fish","giraffes","tigers","squirrels","badgers"];

function setup(){
	createCanvas(100,100);
}
function draw(){
	background(100);
	
	//random greyscale square
	fill(random(255));
	rect(25,25,20,20);

	//random location, but only between two points 25 < x < 50
	fill(0,0,255);
	rect(random(25,50),75, 30,30);

	//random item from array
	text(random(myArray),50,50);
}