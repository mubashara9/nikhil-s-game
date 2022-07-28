class Red_Balloon {
    constructor(x, y, w, h) {
        let options={
            isStatic: false,
        };

        this.body = Bodies.rectangle(x, y, w, h, options);
        this.x = x;
        this.y = y;
        this.w = w/2;
        this.h = h/2;
        this.balloon_image = loadImage("./assets/red.png");
        console.log(this.body.position.y);
        World.add(world, this.body);
    }

    speed() {
        Matter.Body.setPositio(this.body, { x: 0, y: -2 });
    }

    show() {
        let pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(this.body.angle);
        imageMode(CENTER);
        image(this.balloon_image, 0, 0, this.w, this.h);
        pop();
       
    }
}