class ball{
    constructor(){
        var options = {
            isStatic : false,
            restitution : 1,
            density : 1,
            friction : 0.5
        }
        this.body = Bodies.circle(50,300,20, options);
        this.radius = 60;
        this.image = loadImage("paper.png");
        World.add(world, this.body);
    }
    display(){
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,this.radius,this.radius);
    }
}