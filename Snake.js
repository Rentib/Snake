function Snake(){
	this.x = width / 2;
	this.y = width / 2;
	this.vx = 0;
	this.vy = 0;

	this.dir = function(x, y){
		this.vx = x;
		this.vy = y;
	}

	this.eat = function(fruit){
		if(floor(this.x / scl) == floor(fruit.x / scl) && floor(this.y / scl) == floor(fruit.y / scl)){
			s.push(new Snake());
			score++;
			fruit.newPosition();
		}
	}
	
	this.show = function(){
		fill(250);
		rect(this.x, this.y, scl, scl);
	}

	this.update = function(){
		for(var i = s.length - 1;i > 0;i--) {
			s[i].x = s[i - 1].x;
			s[i].y = s[i - 1].y;
			s[i].show();
		}
		
		this.x += this.vx * scl;
		this.y += this.vy * scl;
		this.x = floor(this.x / scl) * scl;
		this.y = floor(this.y / scl) * scl;
	}

	this.death = function(){
		if(this.x < 0 || this.x >= width || this.y < 0 || this.y >= height)
			setup();
		for(var i = 1;i < s.length;i++)
			if(this.x == s[i].x && this.y == s[i].y)
				setup();
	}
}

function Fruit(){
	this.x = 0;
	this.y = 0;
	this.show = function(){
		fill(250, 0, 0);
		rect(this.x, this.y, scl, scl);
	}
	this.newPosition = function(){
		this.x = floor(random(0, width / scl)) * scl;
		this.y = floor(random(0, height / scl)) * scl;
	}
}
