// Rover Object Goes Here
// ======================

// ======================

var rover = {
  direction  :"E",
  position:[0,0],
  travelLog:[ [0,0]]
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
    rover.direction = "N";

  console.log("turnLeft was called!");
}
}
function turnRight(rover){
  switch (rover.direction) {
    case "N":
    rover.direction = "E";
    break;
    case "E":
    rover.direction = "S";
    break;
    case "S":
    rover.direction = "W";
    break;
    case "W":
    rover.direction = "N";}
  console.log("turnRight was called!");
}

function moveForward(rover){
  switch (rover.direction) {
    case "N":
    rover.position[1]= rover.position[1]-1;
    break;
    case "E":
    rover.position[0]= rover.position[0]+1;
    break;
    case "S":
    rover.position[1]= rover.position[1]+1;
    break;
    case "W":
    rover.position[0]= rover.position[0]-1;
    break;
  }

  console.log("moveForward was called")
}

function commands () {
  var x = "rffrfflfrff";
  for (i=0;i< x.length; i++) {

    switch (x[i]) {
      case "l":
      turnLeft(rover);
      case "r":
      turnRight(rover);
      case "f":
      moveForward(rover);
      };
      // rover.travelLog.push(rover.position);
      
      }
    }
;
  // }
;

 rover = {
  direction   : "W" ,
  position: [2,2]
} 
commands (rover);
// console.log (rover.travelLog);




// rover.position.push(1)

// console.log(rover.position)
rover.travelLog.push(rover.position)

console.log(rover.travelLog)

