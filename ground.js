class ground{
    constructor(){
        var options = {
            isStatic : true
        }
           this.body = Bodies.rectangle(400, 600, 800, 20, options);
           this.height = 20;
           this.width = 800;
           World.add(world, this.body);
    }
    display(){
        rectMode(CENTER);
        fill("green");
        rect(this.body.position.x, this.body.position.y, this.width, this.height);
    }
}