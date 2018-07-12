// Rover Object Goes Here
// ======================

// ======================

var rover1 = {
  direction  :"E",
  row:1,
  col:9,
  travelLog:[]
} 


var grid = [
  [true, true, false, true, true,true, true, true, true ,true],
  [true, true, true, true, false,true, true, true, true ,true],
  [true, true, true, true, true,true, true, true, true ,true],
  [true, true, true, false, true,true, true, true, true ,true],
  [true, true, false, true, true,true, true, true, true ,true],
  [true, false, true, true, true,true, true, true, true ,true],
  [true, true, true, false, true,true, true, true, true ,true],
  [true, true, true, true, true,true, true, true, true ,true],
  [true, true, true, true, true,true, true, true, true ,true],
  [true, true, true, true, true,true, true, true, true ,false],
  
  ];

// for (j=0; j<grid.length;j++) {
// console.log(grid[j])
// }

function gridLimit (row,col) {
  if (row>= 0 && row < 10 && col>=0 && col< 10){
    return true ;
   }
   return false;
  
}

function avoidObstacles (row,col) {
  if (grid[row][col]){
    return true;
  }
  return false ;
    
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
      if (gridLimit (rover.row-1,rover.col)){
        if (avoidObstacles (rover.row-1,rover.col)) {
        rover.row= rover.row-1;}
        console.log("There is an obstacle")
      }
      else
     console.log("Rover is off the Grid")
    break;
    case "E":
     if (gridLimit (rover.row,rover.col+1)){
       if(avoidObstacles(rover.row,rover.col+1)){
      rover.col= rover.col+1;}
      else console.log("There is an obstacle")
    }
      else
       console.log("Rover is off the Grid")
    break;
    case "S":
     if (gridLimit (rover.row+1,rover.col)){
      if (avoidObstacles (rover.row+1,rover.col)) {
        rover.row= rover.row+1;}
        console.log("There is an obstacle")
      }
      else
       console.log("Rover is off the Grid")
    break;
    case "W":
     if ( gridLimit (rover.row,rover.col-1)){
      if (avoidObstacles (rover.row,rover.col-1)) {
        rover.col= rover.col-1;}
        console.log("There is an obstacle")
      }
      else
       console.log("Rover is off the Grid")
     break;}
  console.log("moveForward was called");
}

function moveBackward(rover){
  switch (rover.direction) {
    case "N":
      if ( gridLimit (rover.row+1,rover.col)){
        rover.row= rover.row+1;}
      else
     console.log("Rover is off the Grid")
    break;
    case "E":
     if (gridLimit (rover.row,rover.col-1)){
      rover.col= rover.col-1;}
      else
       console.log("Rover is off the Grid")
    break;
    case "S":
     if (gridLimit (rover.row-1,rover.col)){
      rover.row= rover.row-1;}
      else
       console.log("Rover is off the Grid")
    break;
    case "W":
     if ( gridLimit (rover.row,rover.col+1)){
      rover.col= rover.col+1;}
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
        rover.travelLog.push([rover.row,rover.col]);
        console.log (rover.travelLog[rover.travelLog.length -1]);
      break;
      case "b":
        console.log(lists[i]);
        moveBackward(rover);
        rover.travelLog.push([rover.row,rover.col]);
        console.log (rover.travelLog[rover.travelLog.length -1]);
      break;
    };
    console.log("Rover is now facing "+rover.direction)
  }
  else {console.log ("This is invalid")}
   };
    // for (j=0;j<rover.travelLog.length;j++)
    // { 
    //   console.log (rover.travelLog[j]);
    // }
 }


commands ("frfccbflftzlbf",rover1);
// console.log(grid[rover1.row][rover1.col])





