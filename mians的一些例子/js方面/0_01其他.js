let str = "上海自来水来自海上";
// 1.实现字符串的 indexOf
function indexOf(str, val) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === val) {
      return i;
    }
  }
  return -1;
}
console.log(indexOf(str, "海"));

// 2.判断字符串是否为回文
function fn(str) {
  str = str.toLowerCase(); // 字母转小写
  // slice(字符串，数组) splice(数组) split(打散字符串)
  return str == str.split("").reverse().join("");
}
console.log(fn(str));
