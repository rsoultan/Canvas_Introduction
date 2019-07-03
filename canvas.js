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

function GetMousePos() {
    var rect = canvas.getBoundingClientRect();

    return {x: event.clientX - rect.left, y: event.clientY - rect.top};
}

function ClickEventHandler() {
    var pos = GetMousePos();
    var dx = 0;
    var dy = 0;

    for (var index = 0; index < CircleArray.length; index++) {
        dx = CircleArray[index].x - pos.x;
        dy = CircleArray[index].y - pos.y;
        if (dx * dx + dy * dy <= CircleArray[index].radius * CircleArray[index].radius) {
            alert("inside the circle " + index);
        }
    }
}

var CircleArray = InitCircleArray();
var canvas = document.getElementById("my_canvas");
var context = canvas.getContext("2d");

canvas.addEventListener("click", ClickEventHandler);
Draw(CircleArray);