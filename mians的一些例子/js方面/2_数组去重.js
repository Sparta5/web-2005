// 数组去重
let originalArray = [
  1,
  "1",
  "1",
  "1",
  2,
  true,
  "true",
  false,
  false,
  null,
  null,
  {},
  {},
  "abc",
  "abc",
  undefined,
  undefined,
  NaN,
  NaN,
];

// 1.扩展运算符去重
let resultArray = Array.from(new Set(originalArray)); // 等于👇
let resultArray2 = [...new Set(originalArray)];
console.log(resultArray, resultArray2);

// 2.利用双for循环去重
let resultArray3 = originalArray;
for (let i = 0; i < resultArray3.length; i++) {
  for (let j = i + 1; j < resultArray3.length; j++) {
    if (resultArray3[i] === resultArray3[j]) {
      resultArray3.splice(j, 1);
      j--; // 删了后会补位要重新比较当前
    }
  }
}
console.log(resultArray3);

// 3.indexOf去重
function unique1(arr) {
  if (!Array.isArray(arr)) {
    return "type error";
  }
  let resultArray = ["1"];
  for (let i = 0; i < arr.length; i++) {
    if (resultArray.indexOf(arr[i]) === -1) {
      resultArray[resultArray.length] = arr[i];
      // resultArray4.push(arr[i])
    }
  }
  return resultArray;
}
console.log(unique1(originalArray));

// 4.includes 去重
function unique2(arr) {
  console.log(Array.isArray(arr));
  if (!Array.isArray(arr)) {
    return "type error";
  }
  let resultArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (!resultArray.includes(arr[i])) {
      resultArray.push(arr[i]);
    }
  }
  return resultArray;
}
console.log(unique2({ originalArray }));

// 5.hasOwnProperty 去重
function unique3(arr) {
  var obj = {};
  return arr.filter(function (item, index, arr) {
    console.log(obj.hasOwnProperty(typeof item + item));
    console.log(typeof item + item);
    // return obj.hasOwnProperty(typeof item + item)
    //   ? false
    //   : (obj[typeof item + item] = true);
    // 查找是否有自己的属性
    if (obj.hasOwnProperty(typeof item + item)) {
      return false;
    } else {
      // 设置在obj中设置一个属性，在下一次会先判断obj有没有这个属性
      obj[typeof item + item] = true; // 值可以随便设置
      console.log(obj);
      return true;
    }
  });
}
console.log(unique3(originalArray));

// 6.flter 去重
function unique4(arr) {
  return arr.filter(function (item, index, arr) {
    //当前元素，在原始数组中的第一个索引==当前索引值，否则返回当前元素
    return arr.indexOf(item, 3) === index;
  });
}
console.log(unique4(originalArray));

// 7.Map 去重
function unique5(arr) {
  let map = new Map();
  let array = new Array(); // 数组用于返回结果
  console.log(map, array); //= {} []
  for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i])) {
      // 如果有该 key 值
      map.set(arr[i], true); // 值可以随便设置
    } else {
      map.set(arr[i], false); // 如果没有该 key 值
      array.push(arr[i]);
    }
  }
  return array;
}
console.log(unique5(originalArray));

// 8. 利用reduce和includes
function unique6(arr) {
  return arr.reduce(
    (prev, cur) => (prev.includes(cur) ? prev : [...prev, cur]),
    []
  );
}
console.log(unique6(originalArray));
