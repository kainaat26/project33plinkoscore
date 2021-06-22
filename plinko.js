class Plinko{
    constructor(x, y,radius) {
        var options = {
            isStatic:true,
            restitution: 0.2
                
            }
            this.radius = radius;
            this.body = Bodies.circle(x,y,10,options);
            World.add(world,this.body);
          }
      
          display(){
            push();
            ellipseMode(RADIUS);
            ellipse(this.body.position.x,this.body.position.y,10,this.radius);
          }
         }