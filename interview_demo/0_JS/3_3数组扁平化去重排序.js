// 数组扁平化 flat
//使用 Infinity，可展开任意深度的嵌套数组
var arr = [1, 6, [3, 2, [5, 2, [7, 8, [9, 1]]]]];
function flatArr(arr) {
  //   return Array.from(new Set(arr.flat(Infinity))).sort((a, b) => {
  //     return a - b;
  //   });
  return [...new Set(arr.flat(Infinity))].sort((a, b) => {
    return a - b;
  });
}
console.log(flatArr(arr));

// sort
var items = [
  { name: "Edward", value: 21 },
  { name: "Sharpe", value: 37 },
  { name: "Sharpe", value: 32 },
  { name: "And", value: 45 },
  { name: "The", value: -12 },
  { name: "Magnetic" },
  { name: "Zeros", value: 37 },
];

// sort by value
let sort1 = items.slice().sort(function (a, b) {
  return a.value - b.value;
});
console.log(sort1);
// sort by name
let sort2 = items.slice().sort(function (a, b) {
  console.log(a);
  console.log(b);
  var nameA = a.name.toUpperCase(); // ignore upper and lowercase
  var nameB = b.name.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  // names must be equal
  return 0;
});
console.log(sort2);

var numberArray = ["80", "9", "700", 40, 1, 5, 200];
function compareNumbers(a, b) {
  return a - b;
}
console.log(numberArray.join());
console.log(numberArray.sort());
console.log(numberArray.sort(compareNumbers));

// 实现数组合并并排序
var arr1 = ["A1", "A2", "B1", "B2", "C1", "C2", "D1", "D2"];
var arr2 = ["A", "B", "C", "D"];
var arr3 = arr1.concat(arr2);
arr3.sort().sort(function (a, b) {
  console.log(a.charAt(0));
  if (a.charAt(0) == b.charAt(0) && a.length > b.length) {
    return -1;
  }
});
console.log(arr3);
