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

class Line {
    constructor(pointA, pointB) {
        this.pointA = pointA;
        this.pointB = pointB;
    }
    Draw(context) {
        context.beginPath();
        context.moveTo(this.pointA.x, this.pointA.y);
        context.lineTo(this.pointB.x, this.pointB.y);
        context.stroke();
    }
}

function InitCircleArray() {
    var CircleArray = [];

    CircleArray.push(new Circle(50, 50, 50, false));
    CircleArray.push(new Circle(400, 550, 50, false));
    CircleArray.push(new Circle(750, 50, 50, false));
    return (CircleArray);
}

function InitLineArray(CircleArray) {
    var LineArray = [];

    for (var index = 0; index < CircleArray.length - 1; index++) {
        LineArray.push(new Line({x: CircleArray[index].x, y: CircleArray[index].y},
            {x: CircleArray[index + 1].x, y: CircleArray[index + 1].y}));
    }
    return (LineArray);
}

function DrawCircleArray(CircleArray) {
    for (var index = 0; index < CircleArray.length; index++) {
        CircleArray[index].Draw(context);
    }
}

function DrawLineArray(LineArray) {
    for (var index = 0; index < LineArray.length; index++) {
        LineArray[index].Draw(context);
    }
}

var CircleArray = InitCircleArray();
var LineArray = InitLineArray(CircleArray);
var canvas = document.getElementById("my_canvas");
var context = canvas.getContext("2d");

canvas.addEventListener("mouseup", function(event) {
    for (var index = 0; index < CircleArray.length; index++) {
        CircleArray[index].is_selected = false;
    }
});
canvas.addEventListener("mousedown",function(event) {
    var dx = 0;
    var dy = 0;

    for (var index = 0; index < CircleArray.length; index++) {
        dx = CircleArray[index].x - event.offsetX;
        dy = CircleArray[index].y - event.offsetY;
        if (dx * dx + dy * dy <= CircleArray[index].radius * CircleArray[index].radius) {
            CircleArray[index].is_selected = true;
            return;
        }
    }
});
canvas.addEventListener("mouseleave", function(event) {
    for (var index = 0; index < CircleArray.length; index++) {
        CircleArray[index].is_selected = false;
    }
});
canvas.addEventListener("mousemove", function(event) {
    for (var index = 0; index < CircleArray.length; index++) {
        if (CircleArray[index].is_selected == true) {
            CircleArray[index].Move();
            context.clearRect(0, 0, 800, 600);
            DrawCircleArray(CircleArray);
            DrawLineArray(LineArray);
            LineArray = InitLineArray(CircleArray);
        }
    }
});

DrawCircleArray(CircleArray);
DrawLineArray(LineArray);