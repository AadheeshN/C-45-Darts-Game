class Target {
    constructor(x, y, width, height) {
        var options = {
         isStatic: true,   
        }

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;

        World.add(world, this.body);

        this.image = loadImage("assets/download.png");
    }

    display() {
        if (this.body.speed < 5) {
            push();
            translate(this.body.position.x, this.body.position.y);
            rotate(this.body.angle);
            imageMode(CENTER);
            image(this.image, 0, 0, this.width, this.height);
            pop();
        }

        else {
            World.remove(world, this.body);
            this.visibility -= 5;
            tint(255,this.visiblity);
            image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
            
        }
    }
}