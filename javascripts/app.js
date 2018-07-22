var T = true;
var F = false;
var MAX_COL = 10;
var MAX_ROW = 10;

var rover1 = {
	direction: 'E',
	row: 4,
	col: 4,
	travelLog: [],
};

var rover2 = {
	direction: 'E',
	row: 1,
	col: 3,
	travelLog: [],
};
//true: free; false: obstacle or other rover.
var grid = [
	[T, T, T, T, T, T, T, T, T, T],
	[T, T, T, T, F, T, T, T, T, T],
	[T, T, F, T, T, T, T, T, T, T],
	[T, T, T, F, T, T, T, T, T, T],
	[T, T, F, T, F, T, T, F, T, T],
	[T, F, T, T, T, T, T, T, T, T],
	[T, T, T, F, T, F, T, T, T, T],
	[T, T, T, T, T, T, T, T, T, T],
	[T, T, T, T, T, T, T, T, T, T],
	[T, T, T, T, T, T, T, T, T, F],
];

// for (j=0; j<grid.length;j++) {
// console.log(grid[j])
// }
function gridLimit(row, col) {
	return row >= 0 && row < MAX_ROW && col >= 0 && col < MAX_COL;
}

function avoidObstacles(row, col) {
	return grid[row][col];
}

function turnLeft(rover) {
	switch (rover.direction) {
		case 'N':
			rover.direction = 'W';
			break;
		case 'W':
			rover.direction = 'S';
			break;
		case 'S':
			rover.direction = 'E';
			break;
		case 'E':
			rover.direction = 'N';
	}
	console.log('turnLeft was called!');
}
function turnRight(rover) {
  turnLeft (rover);
  turnLeft (rover);
  turnLeft (rover);
	console.log('turnRight was called!');
}
function moveForward(rover) {
	var nextRow = rover.row;
	var nextCol = rover.col;
	switch (rover.direction) {
		case 'N':
			nextRow--;
			break;
		case 'E':
			nextCol++;
			break;
		case 'S':
			nextRow++;
			break;
		case 'W':
			nextCol--;
			break;
	}

	if (gridLimit(nextRow, nextCol)) {
		if (avoidObstacles(nextRow, nextCol)) {
			rover.row = nextRow;
			rover.col = nextCol;
			rover.travelLog.push([rover.row, rover.col]);
		} else console.log('There is an obstacle or another rover');
	} else console.log('Rover is off the Grid');

	console.log('moveForward was called');
}

function moveBackward(rover) {
  turnLeft (rover);
  turnLeft (rover);
  moveForward (rover);
  switch (rover.direction) {
		case 'N':
    rover.direction="S";
			break;
		case 'E':
    rover.direction= "W";
			break;
		case 'S':
    rover.direction="N";
			break;
		case 'W':
    rover.direction= "E";
			break;
	} 
	console.log('moveBackward was called');
}

function commands(lists, rover) {
	// Pushing initial position of the travelog.
  rover.travelLog.push([rover.row, rover.col]);
  
	for (i = 0; i < lists.length; i++) {
		// checking if it is correctt input
		switch (lists[i]) {
			case 'l':
				console.log(lists[i]);
				turnLeft(rover);
				break;
			case 'r':
				console.log(lists[i]);
				turnRight(rover);
				break;
			case 'f':
				console.log(lists[i]);
				moveForward(rover);
				var roverPreviousPosition = rover.travelLog[rover.travelLog.length - 2];
				var roverCurrentPosition = rover.travelLog[rover.travelLog.length - 1];
				console.log('Rover current position: ' + roverCurrentPosition);
				// Rover occupy the spot
				grid[roverCurrentPosition[0]][roverCurrentPosition[1]] = false;
				// console.log("Value of current position : "+ grid[roverCurrentPosition[0]][roverCurrentPosition[1]]);
				if (roverPreviousPosition !== undefined) {
					// console.log ("previous position: "+ roverPreviousPosition);
					//  Rove left the spot
					grid[roverPreviousPosition[0]][roverPreviousPosition[1]] = true;
					// console.log("Value of previous position : "+ grid[roverPreviousPosition[0]][roverPreviousPosition[1]]);
				}
				break;
			case 'b':
				console.log(lists[i]);
				moveBackward(rover);
				var roverPreviousPosition = rover.travelLog[rover.travelLog.length - 2];
				var roverCurrentPosition = rover.travelLog[rover.travelLog.length - 1];
				console.log('Rover current position is ' + roverCurrentPosition);
				grid[roverCurrentPosition[0]][roverCurrentPosition[1]] = false;
				if (roverPreviousPosition !== undefined)
					grid[roverPreviousPosition[0]][roverPreviousPosition[1]] = true;
				break;
			default:
				console.log('This is invalid');
		}
		console.log('Rover is now facing ' + rover.direction);
	}
	for (j = 0; j < rover.travelLog.length; j++) {
		console.log(rover.travelLog[j]);
	}
}
commands('frfccbflftzlbf', rover2);
