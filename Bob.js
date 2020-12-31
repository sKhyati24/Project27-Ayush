class Bob{
    constructor(x,y) {
        var options = {
            'isStatic':false,
            'restitution':0.8,
            'friction':0.5,
            'density':1.2
        }
        this.body = Matter.Bodies.circle(x,y,20, options);
        
        World.add(world,this.body);

    }
    display(){
        var pos =this.body.position;
        var angle=this.body.angle;
       push();
        translate(pos.x,pos.y);
        angleMode(RADIANS);
        rotate(angle);

        ellipseMode(RADIUS);
        ellipse(0,0,20,20);
        fill("0,255,0");
        pop();
        
    
    }
}