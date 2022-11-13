class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("Sprites/bird.png");
  }

  display() {
    //se comentan para que ya se muevan y se quede en un punto fijo
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();
  }
}
