const matrix3x3x3 = [];
for (let i = 0; i < 3; i++) {
  matrix3x3x3[i] = [];
  for (let j = 0; j < 3; j++) {
    matrix3x3x3[i][j] = [];
    for (let k = 0; k < 3; k++) {
      matrix3x3x3[i][j][k] = [];
    }
  }
}
console.log(matrix3x3x3);

const matrix3x3x3fill = [
  [
    [[1], [2], [3]],
    [[4], [5], [6]],
    [[7], [8], [9]],
  ],
  [
    [[10], [11], [12]],
    [[13], [14], [15]],
    [[16], [17], [18]],
  ],
  [
    [[19], [20], [21]],
    [[22], [23], [24]],
    [[25], [26], [27]],
  ],
];

function printMatrix(myMatrix) {
  for (let i = 0; i < myMatrix.length; i++) {
    for (let j = 0; j < myMatrix[i].length; j++) {
      for (let k = 0; k < myMatrix[i][j].length; k++) {
        console.log(myMatrix[i][j][k]);
      }
    }
  }
}

printMatrix(matrix3x3x3fill);
