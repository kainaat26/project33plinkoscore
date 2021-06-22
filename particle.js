class Particle{
    constructor(x, y,radius) {
        var options = {
            isStatic:false,
            restitution: 0.2
                
            }
            this.radius = radius;
            this.body = Bodies.circle(x,y,radius,options);
            this.color = color(random(0,255,0),random(255,0,0),random(0,0,255));
            World.add(world,this.body);
          }
      
          display(){
            push();
            fill(this.color)
            ellipseMode(RADIUS);
            ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
            pop();
          }
         }