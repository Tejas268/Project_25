class Dustbin extends BaseClass {
    constructor(x, y, width, height) {

        super(x,y,width,height);
        this.image = loadImage("dustbin.png");

    } display() {
        scale(0.5,1.5)
        super.display();
    }
}
