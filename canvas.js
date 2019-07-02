class Circle {
    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
    }
    drawCircle(context) {
        context.beginPath();
        context.lineWidth = "5";
        context.strokeStyle = "#4C8"
        context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        context.stroke();
    }
}
var canvas = document.getElementById("my_canvas");
var context = canvas.getContext("2d");
var CircleArray = InitCircleArray();

function InitCircleArray() {
    var CircleArray = [];

    CircleArray.push(new Circle(50, 50, 50));
    CircleArray.push(new Circle(400, 550, 50));
    CircleArray.push(new Circle(750, 50, 50));
    return (CircleArray);
}

function Draw(CircleArray) {
    for (var index = 0; index < CircleArray.length; index++) {
        CircleArray[index].drawCircle(context);
    }
}

Draw(CircleArray);