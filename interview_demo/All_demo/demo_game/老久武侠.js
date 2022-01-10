// 导入输入工具代码,定义输入对象
const input = require("./modules/input");
// 定义同步自执行函数
(async function () {
  let enterName;
  do {
    let newName = await input.in("欢迎来到武侠世界，请输入您的昵称:");
    enterName = await input.in(`${newName}你对你的名字还满意吗？(y/n) :`);
    if (enterName === "io") {
      continue;
    }
    if (enterName === "y") {
      console.log(`头衔：【初入江湖】\n名号：${newName}\n`);
    }
    // 判断是否输入y或者n
    if (enterName !== "n" && enterName !== "y") {
      async function isName() {
        let isState = await input.in(`请输入(y/n) : `);
        if (isState === "y" || isState === "n") {
          enterName = isState;
          isState === "y" &&
            console.log(`头衔：【初入江湖】\n名号：${newName}\n`);
          return true;
        } else {
          return false;
        }
      }
      let isN = await isName();
      while (isN === false) {
        isN = await isName();
      }
    }
  } while (enterName !== "y");

  input.close();
})();
