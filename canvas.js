var canvas = document.getElementById("my_canvas");
var context = canvas.getContext("2d");
var CircleArray = InitCircleArray();
var LineArray = InitLineArray(CircleArray);

DrawCircleArray(CircleArray);
DrawLineArray(LineArray);
GetDistance(CircleArray, LineArray);