class Circle {
    constructor(x, y, radius, is_selected) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.is_selected = is_selected;
    }
    Draw(context) {
        context.beginPath();
        context.lineWidth = "5";
        context.strokeStyle = "#4C8"
        context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        context.stroke();
    }
    Move() {
        this.x = event.offsetX;
        this.y = event.offsetY;
    }
}

function InitCircleArray() {
    var CircleArray = [];

    CircleArray.push(new Circle(50, 50, 50, false));
    CircleArray.push(new Circle(400, 550, 50, false));
    CircleArray.push(new Circle(750, 50, 50, false));
    return (CircleArray);
}

function DrawCircleArray(CircleArray) {
    for (var index = 0; index < CircleArray.length; index++) {
        CircleArray[index].Draw(context);
    }
}