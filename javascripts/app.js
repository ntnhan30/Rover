// Rover Object Goes Here
// ======================

// ======================

var rover = {
  direction   : "E" 
} 

function turnLeft(rover){
  switch (rover.direction) {
    case "N":
    rover.direction = "W";
    break;
    case "W":
    rover.direction = "S";
    break;
    case "S":
    rover.direction = "E";
    break;
    case "E":
    rover.direction = "S";

  console.log("turnLeft was called!");
}
}
function turnRight(rover){
  console.log("turnRight was called!");
}

function moveForward(rover){
  console.log("moveForward was called")
}


turnLeft (rover);
console.log (rover);


