class Circle {
    constructor(x, y, radius, fillStyle) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.fillStyle = fillStyle;
    }
    drawCircle(context) {
        context.beginPath();
        context.lineWidth = "5";
        context.strokeStyle = this.fillStyle;
        context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        context.stroke();
    }
}
var canvas = document.getElementById("my_canvas");
var context = canvas.getContext("2d");
var CircleA = new Circle(50, 50, 50, "#4C8");
var CircleB = new Circle(400, 550, 50, "#A4A");
var CircleC = new Circle(750, 50, 50, "#48C");

CircleA.drawCircle(context);
CircleB.drawCircle(context);
CircleC.drawCircle(context);