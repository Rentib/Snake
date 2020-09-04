function Snake(){
	this.x = 400 / 2;
	this.y = 400 / 2;
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
		if(this.x < 0 || this.x >= 400 || this.y < 0 || this.y >= 400)
			kys();
		if(this.x > 400) this.x -= scl;
		for(var i = 1;i < s.length;i++)
			if(this.x == s[i].x && this.y == s[i].y)
				kys();
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
		this.x = floor(random(0, 400 / scl)) * scl;
		this.y = floor(random(0, 400 / scl)) * scl;
	}
}

function kys(){
	var snake = new Snake();
	snake.x = max(0, min(s[0].x, 380));
	snake.y = max(0, min(s[0].y, 380));
	s.vx = s[0].vx;
	s.vy = s[0].vy;
	s = [];
	score = 0;
	s.push(snake);
}
