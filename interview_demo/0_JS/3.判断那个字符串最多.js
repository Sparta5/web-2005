/*
 * @Author: your name
 * @Date: 2022-01-12 12:54:30
 * @LastEditTime: 2022-01-13 15:11:06
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \web05\interview_demo\0_JS\3.判断那个字符串最多.js
 */
//判断一个字符串中出现次数最多的字符，统计这个次数
const str = "asdfscb88888888sasaa";
// @-封装公用的计算方法
function calc(arr) {
  let iMax = 0;
  let iIndex = "";
  for (const key in arr) {
    // console.log(Object.hasOwnProperty.call(objVal, key))
    if (arr[key] > iMax) {
      iMax = arr[key];
      iIndex = key;
    }
  }
  return `最大字符串为：${iIndex}*${iMax}`;
}

// 1.使用for遍历
let objVal = {};
for (let i = 0; i < str.length; i++) {
  if (!objVal[str.charAt(i)]) {
    objVal[str.charAt(i)] = 1;
  } else {
    objVal[str.charAt(i)]++;
  }
}
console.log(calc(objVal));

//2.使用reduce遍历
const arr = str.split(""); // 打撒成数组形式
console.log(arr);
let result = arr.reduce((box, elem, i, arr) => {
  box[elem] === undefined ? (box[elem] = 1) : box[elem]++;
  return box;
}, []); //[]或者{}
console.log(calc(result));
