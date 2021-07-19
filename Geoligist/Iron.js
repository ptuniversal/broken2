class Iron{
    constructor(x,y){
        var options = {
            'density':30,
            'friction': 3,
            'restitution':0.8  
    }

    this.body=Bodies.rectangle(x,y,width,height,options);
    this.x=x;
    this.y=y;
    this.width=30;
    this.height=30;

    World.add(world,this.body);

    }

    display(){

        var pos =this.body.position;
        push();
        translate(pos.x, pos.y);
        
        strokeWeight(2);
        stroke('orange');
        fill('yellow');
        rectMode(CENTER);
        rect(this.x, this.y,30,30);
        pop();

    }
}