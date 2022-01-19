// function changeObjectProperty(o) {
//   o.siteUrl = "a";
//   o = new Object();
//   o.siteUrl = "b";
// }
// var cr = new Object();
// changeObjectProperty(cr);
// console.log(cr.siteUrl); //a

// //写一个按照下面方式调用都能正常工作的 sum 函数
// function sum(x = 0, y) {
//   console.log([...arguments][1]);
//   if ([...arguments][1] == undefined) {
//     return function suum(after) {
//       console.log(after);
//       return x + after;
//     };
//   } else {
//     return x + y;
//   }
// }
// console.log(sum(2, 3));
// console.log(sum(2)(3));

// function sum(...args) {
//   if ([...args].length == 1) {
//     let sum2 = [...args][0];
//     var suum = function (y) {
//       sum2 += y;
//       return suum;
//     };
//     suum.valueOf = function () {
//       console.log(1); //=
//       return sum2;
//     };

//     suum.toString = function () {
//       console.log(2);
//       return sum2;
//     };
//     return suum;
//   } else {
//     let sum1 = 0;
//     for (var i = 0; i < [...args].length; i++) {
//       sum1 += [...args][i];
//     }
//     return sum1;
//   }
// }
// console.log(sum(2, 3, 4));
// console.log(sum(2)(3)(4)); //=

// (function () {
//   var a = (b = 3);
// })();
// console.log("a defined? " + (typeof a !== "undefined"));
// console.log("b defined? " + (typeof b !== "undefined"));
// console.log(b);
// console.log(typeof a);

// var buttons = [{ name: "b1" }, { name: "b2" }, { name: "b3" }];
// function bind() {
//   for (var i = 0; i < buttons.length; i++) {
//     buttons[i].onclick = function () {
//       console.log(i); //=
//     };
//   }
// }
// bind();
// buttons[0].onclick();
// buttons[1].onclick();
// buttons[2].onclick();

// function fun(n, o) {
//   console.log(o);
//   console.log(n);
//   return {
//     funs: function (m) {
//       return fun(m, n);
//     },
//   };
//   // return function (m) {
//   //   return fun(m, n);
//   // };
// }
// var a = fun(0);
// console.log(a);
// a.funs(1);
// a.funs(2);
// a.funs(3);

// function unique(arr) {
//   //   return Array.from(new Set(arr));
//   //   return [...new Set(arr)];
//   return new Set(arr);
// }
// var arr = [1, 1, 2, 3, 5, 3, 78, 7, 78, 8, 90, 12, 2, 5];
// console.log(unique(arr));

// function combine() {
//   let arr = [].concat.apply([], arguments);
//   console.log(arr);
//   return Array.from(new Set(arr));
// }

// var m = [1, 2, 2],
//   n = [2, 3, 3];
// console.log(combine(m, n));

// @-- 数组去重
var num = [2, 3, 4, 4, 6, 7, 8, 4, 9, 7];

// const arr = [];
// for (let i = 0; i < num.length; i++) {
//   if (arr.indexOf(num[i]) == -1) {
//     arr[arr.length] = num[i];
//   }
// }
// console.log(arr);

// var num = [2, 3, 4, 4, 6, 7, 8, 4, 9, 7];
// const arr2 = [];
// for (let a = 0; a < num.length; a++) {
//   // console.log(num[a]);
//   for (let i = a + 1; i < num.length; i++) {
//     if (num[a] === num[i]) {
//       console.log(num[a]);
//       num.slice(i, 1);
//     }
//   }
// }
// console.log(num);

// var str = "这是测试字符串";
// console.log(str.indexOf("测试"));
// console.log(str.includes("测试"));

// if (str.indexOf("测试") != -1) {
//   // undefined;
//   console.log(true); //包含
// } else {
//   undefined;
//   console.log(false); //不包含
// }

// var name = "lili";
// var obj = {
//   name: "liming",
//   prop: {
//     name: "ivan",
//     getname: function () {
//       return this.name;
//     },
//   },
// };
// console.log(obj.prop.getname());
// var test = obj.prop.getname;
// console.log(test.call(obj));
// console.log(test.call(obj.prop));
// let obj = "456";
// typeof obj === "string";
// typeof obj === "string";
// obj.constructor === Number;

// let str = "12326465441111";
// console.log(str.search(/[4]/i));

// function count(i) {
//   //   return i + 2;
//   console.log(i + 2);
// }
// for (var i = 0; i < 10; i++) {
//   setTimeout(count(), 1000, i);
// }

let arr1 = [4, 78, 5, 4];
let arr2 = [9, 7, 9, 7];
let arrRes = Object.assign(arr1, arr2);
console.log(arr1);
console.log(arrRes);
