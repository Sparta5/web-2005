import { PriorityQueue } from "./PriorityQueue";

// ---------------- 封装的优先队列结构测试 ---------------- //
console.log("// ----- 优先队列结构测试 START -----//");
// 入队 enqueue() 测试
const priorityQueue = new PriorityQueue();
priorityQueue.enqueue("A", 10);
priorityQueue.enqueue("B", 6);
priorityQueue.enqueue("C", 4);
priorityQueue.enqueue("D", 7);
priorityQueue.enqueue("E", 8);
console.log(priorityQueue.items);

// 测试队列api
console.log(priorityQueue.isEmpty());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.size());
console.log(priorityQueue.front());
console.log(priorityQueue.toString());

console.log("// ----- 优先队列结构测试 END -----//");
