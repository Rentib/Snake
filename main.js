const scl = 20;
var s;
var score = 0;
var fruit;

function setup(){
	createCanvas(400, 440);
	s = [];
	s.push(new Snake());
	frameRate(7);
	fruit = new Fruit();
	fruit.newPosition();
}

function draw(){
	background(50);
	scoreboard();
	fruit.show();
	s[0].update();
	s[0].death();
	s[0].show();
	s[0].eat(fruit);
}

function keyPressed(){
	if(keyCode === UP_ARROW || key == 'w')
		s[0].dir(0, -1);
	if(keyCode === RIGHT_ARROW || key == 'd')
		s[0].dir(1, 0);
	if(keyCode === DOWN_ARROW || key == 's')
		s[0].dir(0, 1);
	if(keyCode === LEFT_ARROW || key == 'a')
		s[0].dir(-1, 0);
}

function scoreboard() {
 	fill(0);
  	rect(0, 400, 400, 40);
  	fill(250);
  	textSize(18);
  	text("SCORE: " + score + "", 50, 425);
}
