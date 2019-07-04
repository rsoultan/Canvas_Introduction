class Circle {
    constructor(x, y, radius, is_selected) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.is_selected = is_selected;
    }
    drawCircle(context) {
        context.beginPath();
        context.lineWidth = "5";
        context.strokeStyle = "#4C8"
        context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        context.stroke();
    }
    MoveCircle() {
        this.x = event.offsetX;
        this.y = event.offsetY;
        console.log(this.x);
        console.log(this.y);
    }
}

function InitCircleArray() {
    var CircleArray = [];

    CircleArray.push(new Circle(50, 50, 50, false));
    CircleArray.push(new Circle(400, 550, 50, false));
    CircleArray.push(new Circle(750, 50, 50, false));
    return (CircleArray);
}

function Draw(CircleArray) {
    for (var index = 0; index < CircleArray.length; index++) {
        CircleArray[index].drawCircle(context);
    }
}

function ClickEventHandler() {
    var dx = 0;
    var dy = 0;

    for (var index = 0; index < CircleArray.length; index++) {
        dx = CircleArray[index].x - event.offsetX;
        dy = CircleArray[index].y - event.offsetY;
    }
}

var CircleArray = InitCircleArray();
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
        }
    }
});
canvas.addEventListener("mouseleave", function(event) {
    for (var index = 0; index < CircleArray.length; index++) {
        CircleArray[index].is_selected = false;
    }
});
canvas.addEventListener("mousemove", function(event) {
    console.log(event.offsetX);
    console.log(event.offsetY);

    for (var index = 0; index < CircleArray.length; index++) {
        if (CircleArray[index].is_selected == true) {
            CircleArray[index].MoveCircle();
            context.clearRect(0, 0, 800, 600);
            Draw(CircleArray);
            ClickEventHandler();
        }
    }
});

Draw(CircleArray);