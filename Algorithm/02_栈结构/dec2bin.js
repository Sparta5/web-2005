import Stack from "./stack";

// 函数：将十进制转成二进制
function dec2bin(decNumber) {
  console.log(typeof decNumber); //=
  if (typeof decNumber !== "number") throw new Error("请输入有效数字");
  // 1.定义栈
  var stack = new Stack();

  // 2.循环操作 当循环次数不确定时用 while 循环
  while (decNumber > 0) {
    // 2.1.获取余数，并且放入到栈中
    stack.push(decNumber % 2);
    // 2.2.获取整除后的结果，作为下一次运行的数字
    decNumber = Math.floor(decNumber / 2);
  }
  // 3.从栈中取出0和1（颠倒栈的顺序）
  var binaryString = "";
  while (!stack.isEmpty()) {
    binaryString += stack.pop();
  }
  return binaryString;
}

export default dec2bin;
