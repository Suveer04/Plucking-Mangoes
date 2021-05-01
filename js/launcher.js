class launcher  {

    constructor(bodyA,pointB){
        var options ={
            bodyA : bodyA,
            pointB : pointB,
            stiffness: 0.003,
            length : 1,
        }

        this.launcher = Constraint.create(options);
        this.pointB = pointB;
        this.bodyA = bodyA;
        World.add(world,this.launcher);
    }
attach(bodyA){
this.launcher.bodyA = bodyA;

}
fly(){
    this.launcher.bodyA = null;
}
display(){
    if(this.launcher.bodyA){
        var pointA = this.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(2);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
    
    

     
}









}