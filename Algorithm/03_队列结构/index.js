import Queue from "./queue";
import passGame from "./passGame";

// ---------------- 封装的队列结构测试 ---------------- //
console.log("// ----- 队列结构测试 START -----//");
const queue = new Queue();
// enqueue() 测试
queue.enqueue("a");
queue.enqueue("b");
queue.enqueue("c");
queue.enqueue("d");
console.log(queue.items);

// dequeue() 测试
queue.dequeue(); //=
queue.dequeue(); //=
console.log(queue.items); //--> ["c", "d"]

// front() 测试
console.log(queue.front()); //--> c

// isEmpty() 测试
console.log(queue.isEmpty()); //--> false

// size() 测试
console.log(queue.size()); //--> 2

// toString() 测试
console.log(queue.toString()); //--> c d

// 面试题：击鼓传花(队列算法)
const names = ["Lily", "Lucy", "Tom", "LiLei", "Why"];
const targetIndex = passGame(names, 4);
console.log("击鼓传花", names[targetIndex]);

// 优先级队列

console.log("// ----- 队列结构测试 END -----//");
