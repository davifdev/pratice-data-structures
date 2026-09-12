let averageTemp = [
  [72, 75, 79, 79, 81, 83],
  [81, 79, 75, 75, 73, 72],
];

function printMatrix(myMatrix) {
  for (let i = 0; i < myMatrix.length; i++) {
    for (let j = 0; j < myMatrix[i].length; j++) {
      console.log(myMatrix[i][j]);
    }
  }
}

printMatrix(averageTemp);
