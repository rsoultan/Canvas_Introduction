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

function InitLineArray(CircleArray) {
    var LineArray = [];

    for (var index = 0; index < CircleArray.length - 1; index++) {
        LineArray.push(new Line({x: CircleArray[index].x, y: CircleArray[index].y},
            {x: CircleArray[index + 1].x, y: CircleArray[index + 1].y}));
    }
    return (LineArray);
}

function DrawLineArray(LineArray) {
    for (var index = 0; index < LineArray.length; index++) {
        LineArray[index].Draw(context);
    }
}

function GetDistance(CircleArray, LineArray) {
    var AB = 0;
    var R = 0;
    var result = 0;

    for (var index = 0; index < CircleArray.length - 1; index++) {
        AB = Math.sqrt(Math.pow(CircleArray[index + 1].y - CircleArray[index].y, 2)
            + Math.pow(CircleArray[index + 1].x - CircleArray[index].x, 2));
        R = Math.pow(CircleArray[index].radius + CircleArray[index + 1].radius, 2);
        result = Math.sqrt(AB + R);
        console.log("distance cercles " + index + "-" + (index + 1)  + ": " + AB);
        console.log("result: " + result);
    }
}