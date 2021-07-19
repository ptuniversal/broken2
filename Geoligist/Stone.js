class Stone{
    constructor(x,y,width,height){
    
        var options={
            'density':12,
            'friction': 0.9,
            'restitution':0.8    
        }

        this.body=Bodies.rectangle(x,y,width,height,options);
        this.x=x;
        this.y=y;
        this.width=20;
        this.height=30;

        World.add(world,this.body)

    }

    display(){

        var pos =this.body.position;
        push();
        translate(pos.x, pos.y);
        strokeWeight(1);
        stroke('blue');
        fill('white');
        rectMode(CENTER);
        rect(this.x, this.y,20,30);
        pop();

    }
}