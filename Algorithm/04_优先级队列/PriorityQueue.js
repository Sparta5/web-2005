import Queue from "./queue";

/**
 * 优先队列结构的封装
 */

// 优先级队列内部的元素类
// class QueueElement {
//   constructor(element, priority) {
//     this.element = element;
//     this.priority = priority;
//   }
// }
function QueueElement(element, priority) {
  this.element = element;
  this.priority = priority;
}

// 优先队列类（继承 Queue 类）
export class PriorityQueue extends Queue {
  constructor() {
    super(); // ES6 要求，子类的构造函数必须执行一次 super 函数，否则会报错。
  }
  // enqueue(element, priority) 入队，将元素按优先级加入到队列中
  // 重写 enqueue()
  enqueue(element, priority) {
    // 1.根据传入的都元素，创建 QueueElement 对象
    const queueElement = new QueueElement(element, priority);
    // 2.判断队列是否为空(空的话不用判断优先级)
    // if(this.items.length){
    if (this.isEmpty()) {
      console.log(queueElement); //=
      this.items.push(queueElement);
    } else {
      // 否则就插入队列
      let added = false;
      for (let i = 0; i < this.items.length; i++) {
        if (queueElement.priority < this.items[i].priority) {
          this.items.splice(i, 0, queueElement);
          added = true;
          break;
        }
      }
      // 都大于优先级直接入栈
      if (!added) {
        this.items.push(queueElement);
      }
    }
  }

  // isEmpty() 查看队列是否为空
  // 继承 Queue 类的 isEmpty() super把父组件this指向当前的this（类似call）
  isEmpty() {
    return super.isEmpty();
  }
  // dequeue() 出队，从队列中删除前端元素，返回删除的元素
  // 继承 Queue 类的 dequeue()
  dequeue() {
    return super.dequeue();
  }

  // front() 查看队列的前端元素
  // 继承 Queue 类的 front()
  front() {
    return super.front();
  }

  // size() 查看队列中元素的个数
  // 继承 Queue 类的 size()
  size() {
    return super.size();
  }

  // toString() 将队列中元素以字符串形式返回
  // 重写 toString()
  toString() {
    let resultString = "";
    for (let i = 0; i < this.items.length; i++) {
      resultString +=
        this.items[i].element + "-" + this.items[i].priority + " ";
    }
    return resultString;
  }
}
