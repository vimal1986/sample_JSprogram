var arr = [
  "a",
  "b",
  "c",
  "d",
  "d",
  "e",
  "a",
  "b",
  "c",
  "f",
  "g",
  "h",
  "h",
  "h",
  "e",
  "a"
];
var a = ["a", 1, "a", 2, "1"];
var traverseMatrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
];

var countData = arr.reduce((prev, current) => {
  prev[current] = (prev[current] || 0) + 1;
  return prev;
}, {});

var uniqueVal = a.filter((value, index, self) => {
  return self.indexOf(value) === index;
});

const traverserFn = (traverseMatrix, len) => {
  var data;
  for (var i = 0; i < len; i++) {
    // console.log(i&1)
    if (i & 1) {
      for (var j = 0; j < len; j++) {
        data = `${data}${traverseMatrix[i][j]} `;
      }
    } else {
      for (var k = len - 1; k >= 0; k--) {
        data = `${data}${traverseMatrix[i][k]} `;
      }
    }
  }
  return data;
};
console.log(traverserFn(traverseMatrix, 4));
console.log(countData[Object.keys(countData)[1]]);

console.log(uniqueVal);
