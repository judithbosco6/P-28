class Mango{
    constructor(x,y,width,height){
        var options={
            isStatic:true,
            resitution:0,
            friciton:1,
        }
        
        this.body=Bodies.rectangle(x,y,radius,options);
        this.radius=radius;
        World.add(world,this.body);
        }
        
        display(){
            push();
            ellipseMode(CENTER);
            ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
            pop();
        }
}
