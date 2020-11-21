class Stone{
    constructor(x,y,radius){
        var options={
            isStatic:false,
            restitution:0,
            frcition:1,
            density:1.2
        }

        this.body=Bodies.rectangle(x,y,radius,options);
        this.radius=radius;
        this.image=loadImage("Plucking+mangoes/stone.png");
        World.add(world,this.body);
        }
        
        display(){
            push();
            ellipseMode(CENTER);
            ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
            pop();
        }
}
