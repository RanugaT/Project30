class BaseClass{
    constructor(x, y, width, height, angle) {
        var options = {
          isStatic: false,
            'restitution':1.5,
            'friction':1,
            'density': 0.02,
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        //this.image = loadImage("sprites/base.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        fill("yellow")
        rotate(angle);
        rectMode(CENTER);
        rect( 0, 0, this.width, this.height);
        pop();
      }
}