class Rope{
    constructor(bodyA, bodyB){
        var options = {
            bodyA: bodyA,
            pointB: bodyB,
            // stiffness: 0.01,
             length: 300
        }
        this.pointB=bodyB;
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }

    display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.pointB;
        ellipseMode(RADIUS);
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
      }
};

