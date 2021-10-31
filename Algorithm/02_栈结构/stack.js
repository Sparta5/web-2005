// 栈结构的封装
export default class Stack {
  constructor() {
    this.items = [];
  }
  // 1.push(item) 压栈操作，往栈里面添加元素
  push(item) {
    this.items.push(item);
  }

  // 2.pop() 出栈操作，从栈中取出元素，并返回取出的那个元素
  pop() {
    if (this.isEmpty()) throw new Error("栈空了");
    return this.items.pop();
  }

  // 3.peek() 查看栈顶元素
  peek() {
    if (this.isEmpty()) throw new Error("栈空了");
    return this.items[this.items.length - 1];
  }

  // 4.isEmpty() 判断栈是否为空
  isEmpty() {
    return this.items.length === 0;
  }

  // 4.size() 返回以字符串形式的栈内元素数据
  size() {
    return this.items.length;
  }

  // 5.toString() 返回以字符串形式的栈内元素数据
  toString() {
    let resultString = "";
    for (let i = 0; i < this.items.length; i++) {
      resultString += this.items[i];
    }
    return resultString;
  }
}
