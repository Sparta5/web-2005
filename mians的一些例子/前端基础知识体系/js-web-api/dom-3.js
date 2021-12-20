const list = document.getElementById("list");

// 创建一个文档片段，此时还没有插入到 DOM 结构中
const frag = document.createDocumentFragment();

for (let i = 0; i < 20; i++) {
  const li = document.createElement("li");
  li.innerHTML = `List item ${i}`;

  // 先插入文档片段中
  frag.appendChild(li);
}

list.appendChild(frag);

console.log(frag);
