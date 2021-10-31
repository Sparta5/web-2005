// 封装队列
function Queue() {
  // 属性
  this.items = [];
  // 方法
  // 1.将元素添加到队列中
  // this.push = function () { // 每一个对象都有一个方法
  //   this.items.push(element);
  // };
  Queue.prototype.enqueue = function (element) {
    // 共享方法节省内存
    this.items.push(element);
  };
  // 2.从队列中删除前端元素
  Queue.prototype.dequeue = function () {
    return this.items.shift();
  };
  //3.查看前端元素
  Queue.prototype.front = function () {
    return this.items[0];
  };
  // isEmpty() 查看队列是否为空
  Queue.prototype.isEmpty = () => {
    return this.items.length === 0;
  };
  // size() 查看队列中元素的个数
  Queue.prototype.size = () => {
    return this.items.length;
  };
  // toString() 将队列中的元素以字符串形式返回
  Queue.prototype.toString = () => {
    let result = "";
    for (let item of this.items) {
      result += item + " ";
    }
    return result;
  };
}

export default Queue;
