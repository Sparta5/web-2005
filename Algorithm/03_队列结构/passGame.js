import Queue from "./queue";
// 函数：击鼓传花
function passGame(nameList, num) {
  // 1.创建一个队列结构
  const queue = new Queue();

  // 2.将队列结构添加到数组中
  for (let i = 0; i < nameList.length; i++) {
    queue.enqueue(nameList[i]);
  }

  // 3.开始数数字
  while (queue.size() > 1) {
    // 3.1不是num的时候添加到队列末尾
    for (let i = 0; i < num - 1; i++) {
      queue.enqueue(queue.dequeue());
    }
    // 3.2是num这个数字的时候，将其删除
    queue.dequeue();
  }

  // 4.获取剩下的那个人
  console.log(queue.size());
  var endName = queue.front();
  console.log("剩下的那个人是：" + endName, queue.size());
  return nameList.indexOf(endName);
}

export default passGame;
