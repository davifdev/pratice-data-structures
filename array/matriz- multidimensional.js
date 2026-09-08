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

for (let i = 0; i < matrix3x3x3.length; i++) {
  for (let j = 0; j < matrix3x3x3[i].length; j++) {
    for (let k = 0; k < matrix3x3x3[i][j]; z++) {
      console.log(matrix3x3x3[i][j][k]);
    }
  }
}

const matrix3x3x3Fill = [
  [
    [12, 75, 79, 79, 81, 81],
    [22, 75, 79, 79, 81, 81],
    [32, 75, 79, 79, 81, 81],
  ],
  [
    [41, 79, 75, 75, 73, 73],
    [51, 79, 75, 75, 73, 73],
    [61, 79, 75, 75, 73, 73],
  ],
  [
    [71, 79, 75, 75, 73, 73],
    [81, 79, 75, 75, 73, 73],
    [91, 79, 75, 75, 73, 73],
  ],
];

for (let i = 0; i < matrix3x3x3Fill.length; i++) {
  for (let j = 0; j < matrix3x3x3Fill[i].length; j++) {
    for (let k = 0; k < matrix3x3x3Fill[i][j].length; k++) {
      console.log(matrix3x3x3Fill[i][j][k]);
    }
  }
}
