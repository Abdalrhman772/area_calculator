let shape = prompt("enter the name of the shape to calculate the area");
var area = 0;
switch (shape.toLowerCase()) {
  case "circle":
    var r = prompt("enter the radius of the circle");
    area = Math.pow(r, 2) * Math.PI;
    document.write(`area of ${shape} = ${area}`);
    break;

  case "triangle":
    var b = prompt("enter the base of the triangle");
    var h = prompt("enter the height of the triangle");
    area = b * h * 0.5;
    document.write(`area of ${shape} = ${area}`);
    break;

  case "square":
    var a = prompt("enter length of the square side");
    area = a * a;
    document.write(`area of ${shape} = ${area}`);
    break;

  case "rectangle":
    var l = prompt("enter the length of rectangle");
    var w = prompt("enter the width of rectangle");
    area = l * w;
    document.write(`area of ${shape} = ${area}`);
    break;

  case "parallelogram":
    var b = prompt("enter the base of the parallelogram");
    var h = prompt("enter the height of the parallelogram");
    area = b * h;
    document.write(`area of ${shape} = ${area}`);
    break;

  case "trapezium":
    var x = prompt("enter the length of first side trapezium");
    var y = prompt("enter the length of second side trapezium");
    var h = prompt("enter the height of the parallelogram");
    area = 0.5 * (x + y) * h;
    document.write(`area of ${shape} = ${area}`);
    break;

  case "Ellipse":
    var a = prompt("enter the minor axis");
    var b = prompt("enter the major axis");
    area = 0.5 * a * 0.5 * b * Math.PI;
    document.write(`area of ${shape} = ${area}`);
    break;

  default:
    alert("enter valid shape name");
    break;
}
