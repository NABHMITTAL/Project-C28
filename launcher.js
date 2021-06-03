class Launcher {
    constructor(bodyA,pointB){
        var opt = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.1,
            length : 1
        }
        this.sling = Constraint.create(opt);
        this.pointB = pointB
        World.add(world,this.sling)


            
    }

attach(body){
    this.sling.bodyA = body
}

    fly(){
        this.sling.bodyA = null
    }

    display(){

if(this.sling.bodyA){
        var b1 = this.sling.bodyA.position
        var b2 = this.pointB
        }
    }
}