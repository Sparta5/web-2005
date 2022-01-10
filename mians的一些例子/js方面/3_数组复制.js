var arr = [2, 3, 4, [2, 3, 4]];
// 1.slice(浅复制)
var newArr = arr.slice(); // 不改变原数组
console.log(newArr, arr);

// 2.assign(浅复制)
let newArr2 = [];
Object.assign(newArr2, arr);
console.log(newArr2, arr);

// 3.JSON实现深复制
let newArr3 = JSON.parse(JSON.stringify(arr));
arr[3][0] = 9;
console.log(newArr3);

// 4.concat和、扩展运算符和遍历数组
