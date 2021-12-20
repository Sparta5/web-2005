// const div1 = document.getElementById("div1");
// console.log(div1);

// const divList = document.getElementsByTagName("div");
// console.log(divList, divList.length);
// console.log(divList[0], divList[1], divList[2]);

// const containerList = document.getElementsByClassName("container");
// console.log(containerList);
// console.log(containerList[1]);

// const pList = document.querySelectorAll("p");
// console.log(pList);

const pList = document.querySelectorAll("p");
const p1 = pList[0];

// property 形式
// p1.style.width = "100px";
// console.log(p1.style.width);
// p1.className = "red";
// console.log(p1.className);
// console.log(pList, p1.nodeName);
// console.log(p1.nodeType);

console.log("--------------------------");

// attribute
p1.setAttribute("data-name", "imooc");
console.log(p1.getAttribute("data-name"));
p1.setAttribute("style", "font-size:50px");
console.log(p1.getAttribute("style"));
