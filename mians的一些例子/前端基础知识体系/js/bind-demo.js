Function.prototype.bind1 = function () {
  // arguments 是个对象需要切割成数组
  const argt = Array.prototype.slice.call(arguments);
  console.log(argt);

  // 获取 this （数组第一个）
  const t = argt.shift();
  console.log(t);

  const self = this;

  // 返回一个函数
  return function () {
    console.log(t, self);
    return self.apply(t, argt);
  };
};

function fn1(a, b, c) {
  console.log(this);
  console.log(a, b, c);
  return "this is fn1";
}

// 手写bind
const fn3 = fn1.bind1({ x: 100 }, 10, 20, 30);
const res2 = fn3();
console.log(res2);

// const fn2 = fn1.bind({ x: 100 }, 20);
// console.log(fn2, "fn2");
// const res = fn2(10, 20, 30);
// console.log(res);
// console.log(fn1.call({ x: 100 }, 10, 20, 30));
// console.log(fn1.apply({ x: 100 }, [10, 20, 30]));
