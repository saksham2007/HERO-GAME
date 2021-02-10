class Hero{
    constructor(x,y,r)
    {
        var options={
            density:1,
            frictionAir:1
          
        }
        this.x=x
        this.y=y
        this.r=r
        this.image=loadImage("images/Superhero-01.png")
        this.body=Bodies.circle(this.x,this.y,this.r,options)
        World.add(world,this.body)
    }
    display(){
        var heroPos=this.body.position;
        push()
        imageMode(CENTER)
        image(this.image,heroPos.x,heroPos.y,this.r*2,this.r)
        pop()
    }
}

