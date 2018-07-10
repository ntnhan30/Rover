// Rover Object Goes Here
// ======================

// ======================

var rover1 = {
  direction  :"E",
  x:5,
  y:8,
  travelLog:[]
} 

var Obstacles = {
  x:3,
  y:4,
}
var grid = [
  ["o", null, null, null, null,null, null, null, null ,null],
  [null, null, null, null, null,null, null, null, null, null],
  [null, null, null, "o", null,null, null, null, null, null],
  [null, null, null, null, null,null, null, null, null ,null],
  [null, null, null, "o", null,null, null, null, null ,null],
  [null, null, null, null, null,null, null, null, null, null],
  [null, null, null, null, null,null, null, null, null, null],
  [null, null, null, null, null,null, null, null, null ,null],
  [null, null, null, null, null,null, null, null, null, null],
  [null, null, null, null, null,null, null, null, null, null],
];

for (j=0; j<grid.length;j++) {
console.log(grid[j])

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
}
console.log("turnLeft was called!");
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
      if ( rover.y-1 >= 0 && rover.y-1 < 10){
        rover.y= rover.y-1;}
      else
     console.log("Rover is off the Grid")
    break;
    case "E":
     if (rover.x+1 >= 0 && rover.x+1 < 10){
      rover.x= rover.x+1;}
      else
       console.log("Rover is off the Grid")
    break;
    case "S":
     if (rover.y+1 >= 0 && rover.y+1 < 10){
      rover.y= rover.y+1;}
      else
       console.log("Rover is off the Grid")
    break;
    case "W":
     if ( rover.x-1 >= 0 && rover.x-1 < 10){
      rover.x= rover.x-1;}
      else
       console.log("Rover is off the Grid")
     break;}
  console.log("moveForward was called");
}

function moveBackward(rover){
  switch (rover.direction) {
    case "N":
      if ( rover.y+1 >= 0 && rover.y+1 < 10){
        rover.y= rover.y+1;}
      else
     console.log("Rover is off the Grid")
    break;
    case "E":
     if (rover.x-1 >= 0 && rover.x-1 < 10){
      rover.x= rover.x-1;}
      else
       console.log("Rover is off the Grid")
    break;
    case "S":
     if (rover.y-1 >= 0 && rover.y-1 < 10){
      rover.y= rover.y-1;}
      else
       console.log("Rover is off the Grid")
    break;
    case "W":
     if ( rover.x+1 >= 0 && rover.x+1 < 10){
      rover.x= rover.x+1;}
      else
       console.log("Rover is off the Grid")
     break;
     }
  console.log("moveBackward was called");
    
}

function commands (lists, rover) {
  for (i=0;i< lists.length; i++) {
    if (lists[i]=== "l" || lists[i]==="r"|| lists[i]=== "b"|| lists[i]=== "f") {
    switch (lists[i]) {
      case "l":
        console.log(lists[i])
        turnLeft(rover)
      break;
      case "r":
        console.log(lists[i])
        turnRight(rover)
      break;
      case "f":
        console.log(lists[i]);
        moveForward(rover);
        rover.travelLog.push([rover.x,rover.y]);
        console.log (rover.travelLog[rover.travelLog.length -1]);
      break;
      case "b":
        console.log(lists[i]);
        moveBackward(rover);
        rover.travelLog.push([rover.x,rover.y]);
        console.log (rover.travelLog[rover.travelLog.length -1]);
      break;
    };
    console.log(rover.direction)
  }
  else {console.log ("This is invalid")}
   };
    // for (j=0;j<rover.travelLog.length;j++)
    // { 
    //   console.log (rover.travelLog[j]);
    // }
 }


// commands ("rfccbflftzlbf",rover1);





