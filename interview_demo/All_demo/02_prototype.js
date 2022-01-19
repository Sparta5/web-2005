// 首先有个父类 Person：
function Person(name) {
  this.name = name;
}
Person.prototype.age = 25;
Person.prototype.show = function () {
  console.log(this.name);
};

//1.原型链继承：子类的原型是父类的实例。
function Teacher(name) {}
Teacher.prototype = new Person();
// 测试
let p1 = new Teacher();
p1.name = "李老师";
console.log(p1.name); //undefined
console.log(p1.age); //25
//修改当前属性会影响其他的引用

//2.使用方法劫持借用构造函数
function Teacher(name) {
  Person.call(this, name);
}
// 测试
let p2 = new Teacher("李老师");
console.log(p2.name); //李老师
console.log(p2.age); //25
//不共享属性和方法，复用率低

//3.组合继承
function Teacher(name) {
  Person.call(this, name);
}
Teacher.prototype = new Person();
//测试
let p3 = new Teacher("李老师");
p3.show(); //"李老师"
p3.age; //25
console.log(p3);

//4.使用 Object.create 方法
function Teacher(name, age) {
  this.age = age;
  Person.call(this, name); //属性不在 prototype 上
}
Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;
Teacher.prototype.getAge = function () {
  console.log(this.age);
};
var P = new Person("John");
var C = new Teacher("Joe", 30);
P.show(); // John
C.show(); // Joe
C.getAge(); //30

//5.🦊extends 关键字实现继承
class parent {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
class Children extends parent {
  constructor(name, age, job) {
    super(name, age);
    this.job = job;
  }
}
Children.name = "lilei";
Children.job = { inte: 30 };
console.log(Children.name);
console.log(Children.age);
console.log(Children.job);

//6.对象冒充
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.show = function () {
    console.log(this.name + ", " + this.age);
  };
}
function Student(name, age) {
  this.student = Person; //将 Person 类的构造函数赋值给 this.student
  this.student(name, age); //JS 中实际上是通过对象冒充来实现继承的
  delete this.student; //移除对 Person 的引用
}
var s = new Student("小明", 17);
s.show();
var p = new Person("小花", 18);
p.show();
