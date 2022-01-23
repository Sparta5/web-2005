// 下面代码中 a 在什么情况下会打印 1？
// var a =? ;
//  if (a == 1 && a == 2 && a == 3) {
//  console.log (1);
// }

//@--方式一
var a = {
  i: 1,
  toString() {
    console.log(this.i);
    return a.i++;
  },
};
// 1、对象在与字符串拼接或比较时，首先会通过valueOf()方法来调用其原始值。原始值即其本身的值。
// 2、如果值为对象，则会调用toString()方法。若对象本身没有该方法，会返回"[object ObjectName]"，其中 ObjectName 是对象类型的名称。
// 3、该对象obj下如果有toString()方法，会调用该方法。
// console.log(a == 1, a == 2, a == 3); // true  true  true
if (a == 1 && a == 2 && a == 3) {
  console.log(1);
}

//@--方式二
// 应为会优先调用valueOf()，所以直接修改valueOf
var a3 = Object.create({
  count: 0,
  valueOf: function () {
    return ++this.count;
  },
});
if (a3 == 1 && a3 == 2 && a3 == 3) {
  console.log(1);
}

// @--方式三
// 调用默认调用toString方法会间接调用join(),所以将join替换为shift()（返回第一个）
var a3 = [1, 2, 3];
a3.join = a3.shift;
if (a3 == 1 && a3 == 2 && a3 == 3) {
  console.log("1");
}

//@--方式四
// 请个保镖监听get
var a4 = {};
Object.defineProperty(a4, "a", {
  get: function () {
    return (this.value = this.value ? (this.value += 1) : 1);
  },
});
// console.log(a4.a == 1, a4.a == 2, a4.a == 3); //=
if (a4.a == 1 && a4.a == 2 && a4.a == 3) {
  console.log("1"); //=
}
