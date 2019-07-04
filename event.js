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
            GetDistance(CircleArray, LineArray);
        }
    }
});