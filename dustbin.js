class dustbin {
    constructor(){
        var options = {
            isStatic : true
        }
        this.body = Bodies.rectangle(680,530,150,20,options);
        this.body1 = Bodies.rectangle(680-75,530-50,20,150,options);
        this.body2 = Bodies.rectangle(680+75,530-50,20,150,options);
        this.image = loadImage("dustbin.png");
        World.add(world, this.body);
        World.add(world,this.body2);
        World.add(world,this.body1);
    }
    display(){
        imageMode(CENTER);
        image(this.image,680,530,150,150);
    }
}