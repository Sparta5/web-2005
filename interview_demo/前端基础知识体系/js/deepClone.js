/**
 * 深拷贝
 */

const obj1 = {
  age: 20,
  name: "xxx",
  address: {
    city: "beijing",
  },
  arr: ["a", "b", "c"],
};
const obj2 = deepClone(obj1);
obj1.name = "Li Lei";
obj1.address.city = "chengdu";
obj1.arr[0] = ["546", "9496"];
console.log(obj2.name, obj2.address.city, obj2.arr[0]);
console.log(obj1.name, obj1.address.city, obj1.arr[0]);

/**
 * @param {Object} obj 要拷贝的对象
 */
function deepClone(obj) {
  // obj是null，或者不是数组和对象，直接返回
  if (typeof obj !== "object" || obj == null) {
    return obj;
  }

  // 初始化返回结果
  let result;
  if (obj instanceof Array) {
    result = [];
  } else {
    result = {};
  }

  // 循环进行回调
  for (const key in obj) {
    // 确保不是原型上的key
    if (obj.hasOwnProperty(key)) {
      result[key] = deepClone(obj[key]);
    }
  }
  return result;
}
