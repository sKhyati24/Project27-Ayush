class Rope{
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX=offsetX
        this.offsetY=offsetY
        var options={
            bodyA:body1,
            bodyB:body2,
            pointB:{x:this.offsetX, y:this.offsetY}
        } 
        this.rope=Constraint.create(options)
        World.add(world,this.rope);
        
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
        pop();
        }

}