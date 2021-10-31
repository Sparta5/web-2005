import Stack from "./stack";
import dec2bin from "./dec2bin";

// ------------- 测试封装栈 ---------- //
console.log("// ----- 栈结构测试 START -----//");
var s = new Stack();
// console.log(s.pop()); // 栈的长度
s.push(10);
s.push(20);
s.push(30);
s.push(40);
s.push(50);
console.log(s);
console.log(s.isEmpty()); // 是否为空
console.log(s.size()); // 栈的长度
console.log(s.pop()); // 栈的长度
console.log(s.peek()); // 查看栈顶元素
console.log(s.toString()); // 查看栈顶元素

// dec2bin 十进制转二进制
console.log(dec2bin(20));
console.log(dec2bin(1000));

console.log("// ----- 栈结构测试 END -----//");
