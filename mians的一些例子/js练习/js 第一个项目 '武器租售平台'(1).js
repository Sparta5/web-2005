/*
 * @Author: your name
 * @Date: 2021-12-17 11:07:04
 * @LastEditTime: 2021-12-17 13:35:31
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \js练习\js 第一个项目 '武器租售平台'(1).js
 */
//切记加注释     让自己知道我干了什么  需要什么  怎么做的
const input = require("./modules/input");
(async function () {
  //首先声明一个变量保存账号密码
  console.log(
    "欢迎来到---------------------------------------京东商城---------------------------------------"
  );
  let vacancy = [
    ["兼-20", 3000, 1],
    ["米哥-20", 4000, 2],
    ["晕-20", 3500, 2],
  ];
  let lands = [
    ["机枪", 500, 2],
    ["步枪", 550, 1],
    ["狙击", 600, 1],
  ];
  let water = [
    ["航母", 5000, 1],
    ["驱逐兼", 5550, 1],
    ["巡洋", 6500, 1],
  ];
  let account = await input.in("请输入您的账号"); //account账号
  account = parseInt(account);
  let password = await input.in("请输入您的密码"); //password密码
  password = parseInt(password);
  //如果账号密码输入正确那么就打印商店菜单 如果输入错误就给出提示
  if (account === 1 && password === 1) {
    // 封装分类选择方法
    async function shopping() {
      //这里准备开始打印菜单 使用 do while 循环执行
      console.log(
        "-------------------尊敬的 876*******18 用户欢迎来到武器商店-------------------\n 为了保密起见请遵守游戏规则"
      );
      console.log("====武器商店====");
      console.log("=====请仔细查看选项=====");
      let menu = "1.商品分类\n2.选购商品\n3.您的购物车"; // menu  菜单
      console.log(menu);
      let option = await input.in("请输入您的选项 (输入 0 退出菜单)"); // option 选择
      return parseInt(option);
    }
    // 封装判断方法
    async function judge() {
      let option = await input.in("请输入您的选项(vacancy/lands/water)"); // option 选择
      option.then((res) => {
        if (option === "vacancy") {
          //   judge.then((res) => {});
          console.log("vacancy");
          // judge.then((res) => {});
        } else {
          judge();
        }
      });
      //   if (option === "vacancy") {
      //     judge.then((res) => {});
      //     console.log("vacancy");
      //     // judge.then((res) => {});
      //   } else {
      //     isJudge();
      //   }
    }
    // console.log("调用封装方法");
    let isShopping = await shopping();
    // 如果不是选择1~3重选
    while (isShopping > 3) {
      isShopping = await shopping();
    }
    switch (isShopping) {
      case isShopping === 1:
        break;
      case isShopping === 2:
        break;
      case isShopping === 3:
        break;
      default:
        break;
    }
    // 选择二级判断
    let selective = await input.in("请输入您的选项(vacancy/lands/water)"); // option 选择
    while (selective === "vacancy") {
      selective = await input.in("请输入您的选项(vacancy/lands/water):");
    }
    // shopping().then(res=>{})
  } else {
    console.log("您的账号密码错误请注意");
  }

  input.close();
})();
// case 2:
// console.log('武器店 ==> 选购商品\n2.水面\n3.陆地')
// break;
// case 3:
// console.log('武器店 ==> 您的购物车')
// break;
// option = await input.in('请输入您要购买的商品名称')
