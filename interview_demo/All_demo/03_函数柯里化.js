function add1() {
  let args = Array.prototype.slice.call(arguments);
  console.log(arguments);
  console.log(args);
  args.push(...arguments);
  console.log(args);
  add1.toString = function () {
    return args.reduce(function (prev, cur) {
      return prev + cur;
    });
  };
  return add1;
}

const result1 = add1(1)(2)(3, 4, 5);
console.log("result1:", parseInt(result1));
