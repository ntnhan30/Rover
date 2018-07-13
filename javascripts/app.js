// Rover Object Goes Here
// ======================

// ======================

var rover1 = {
  direction :"E",
  row:2,
  col:5,
  travelLog:[]
} 

var rover2 = {
  direction :"E",
  row:1,
  col:9,
  travelLog:[]
} 


var grid = [
  [true, true, true, true, true,true, true, true, true ,true],
  [true, true, true, true, true,true, true, true, true ,true],
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
         rover.row= rover.row-1;
         rover.travelLog.push([rover.row,rover.col]);
      }
        else console.log("There is an obstacle or another rover")
      }
       else
       console.log("Rover is off the Grid")
      break;
    case "E":
     if (gridLimit (rover.row,rover.col+1)){
       if(avoidObstacles(rover.row,rover.col+1)){
         rover.col= rover.col+1;
         rover.travelLog.push([rover.row,rover.col]); 
    }
      else console.log("There is an obstacle or another rover")
     }
      else
       console.log("Rover is off the Grid")
    break;
    case "S":
     if (gridLimit (rover.row+1,rover.col)){
      if (avoidObstacles (rover.row+1,rover.col)) {
        rover.row= rover.row+1;
        rover.travelLog.push([rover.row,rover.col]);
      }
        else console.log("There is an obstacle or another rover")
      }
         else
        console.log("Rover is off the Grid")
    break;
    case "W":
     if ( gridLimit (rover.row,rover.col-1)){
      if (avoidObstacles (rover.row,rover.col-1)) {
        rover.col= rover.col-1;
        rover.travelLog.push([rover.row,rover.col]);
      }
        else console.log("There is an obstacle or another rover")
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
        if (avoidObstacles (rover.row+1,rover.col)) {
          rover.row= rover.row+1;
          rover.travelLog.push([rover.row,rover.col]);
    }
        else console.log("There is an obstacle or another rover")
       }
        else
         console.log("Rover is off the Grid")
    break;
    case "E":
     if (gridLimit (rover.row,rover.col-1)){
      if (avoidObstacles (rover.row,rover.col-1)) {
        rover.col= rover.col-1;
        rover.travelLog.push([rover.row,rover.col]);
      }
        else console.log("There is an obstacle or another rover")
      }
         else
       console.log("Rover is off the Grid")
    break;
    case "S":
     if (gridLimit (rover.row-1,rover.col)){
      if (avoidObstacles (rover.row-1,rover.col)) {
        rover.row= rover.row-1;
        rover.travelLog.push([rover.row,rover.col]);
      }
        else console.log("There is an obstacle or another rover")
      }
        else
         console.log("Rover is off the Grid")
    break;
    case "W":
     if ( gridLimit (rover.row,rover.col+1)){
      if (avoidObstacles (rover.row,rover.col+1)) {
        rover.col= rover.col+1;
        rover.travelLog.push([rover.row,rover.col]);
      }
        else console.log("There is an obstacle or another rover")
      }
        else
        console.log("Rover is off the Grid")
     break;
     }
  console.log("moveBackward was called");
    
}

function commands (lists, rover) {
  var roverCurrentPosition= rover.travelLog[rover.travelLog.length -1];
  var roverPreviousPosition= rover.travelLog[rover.travelLog.length-2];
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
        if (roverCurrentPosition !== undefined) {
         console.log ("currenr position: "+ roverCurrentPosition);
         grid[roverCurrentPosition[0]][roverCurrentPosition[1]]=false ; }
         // console.log("Value of current position : "+ grid[roverCurrentPosition[0]][roverCurrentPosition[1]]);
        if (roverPreviousPosition !== undefined)
         //  { console.log ("previous position: "+ roverPreviousPosition);
         grid[roverPreviousPosition[0]][roverPreviousPosition[1]]=true ; 
        // console.log("Value of previous position : "+ grid[roverPreviousPosition[0]][roverPreviousPosition[1]]);}

      break;
      case "b":
        console.log(lists[i]);
        moveBackward(rover);
        console.log (rover.travelLog[rover.travelLog.length -1]);
        if (roverCurrentPosition !== undefined) {
         grid[roverCurrentPosition[0]][roverCurrentPosition[1]]=false ; }
        if (roverPreviousPosition !== undefined)
         grid[roverPreviousPosition[0]][roverPreviousPosition[1]]=true ; 
      break;
    };
    console.log("Rover is now facing "+rover.direction)
  }
  else {console.log ("This is invalid")}
   };
    for (j=0;j<rover.travelLog.length;j++)
    { 
      console.log (rover.travelLog[j]);
    }
 }

// console.log(grid[rover1.row][rover1.col])

    commands ("frfccbflftzlbf",rover1);
    // commands ("frfccbflftzlbf",rover1);

 




