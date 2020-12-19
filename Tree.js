class Tree {
    constructor(x, y) {
      var options = {
          isStatic:true
      }
     
      
      this.body = Bodies.rectangle(x, y, options);

      this.image = loadImage("tree.png");

     
      
      
    }
    display(){
      var pos =this.body.position;
     
      
      
     

      imageMode(CENTER);
      
      image(this.image,pos.x,pos.y,600,600);
    
      //ellipse(0,0,this.r,this.r);
     
    }
  };