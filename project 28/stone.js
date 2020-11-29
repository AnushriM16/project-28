class stone {
    constructor(x,y,r){
        var options={
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.4,
        }
        this.x=x;
        this.y=y;
        thir.r=r;
        this.image = loadImage("sprites/stone.png");
        this.body = Bodies.circle(this.x,this.y,this.r/2,options);
        World.add(world,this.body);
    }
    display (){
        var stonepos = this.body.positiion;
        push()
        translate(stonepos.x,stonepos.y);
        fill("grey");
        image(this.image,0,0,this.r*2,this.r*2);
        ellipseMode(RADIUS);
        pop()
    }
}