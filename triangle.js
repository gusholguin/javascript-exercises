// A JavaScript program to find the area of a triangle

// VERSION 2

function areaTriangleCalculator() {
  var sideA = document.getElementById('numberUno').value;
  var sideB = document.getElementById('numberDos').value;
  var sideC = document.getElementById('numberTres').value;

  var perimeter = (parseInt(sideA) + parseInt(sideB) + parseInt(sideC))/2;

  var triangleArea = Math.sqrt(perimeter*((perimeter-parseInt(sideA))*(perimeter-parseInt(sideB))*(perimeter-parseInt(sideC))));

  var triangleAreaRounded = Math.round(triangleArea);

  document.getElementById("triangleAreaRounded").innerHTML = triangleAreaRounded;
}

// VERSION 1
/*
var sideA = 5;
var sideB = 6;
var sideC = 7;
var perimeter = (sideA + sideB + sideC)/2;

var triangleArea = Math.sqrt(perimeter*((perimeter-sideA)*(perimeter-sideB)*(perimeter-sideC)));

var triangleAreaRounded = Math.round(triangleArea);

document.write("Your triangle has an area of :" + ' ' + triangleAreaRounded);
*/
