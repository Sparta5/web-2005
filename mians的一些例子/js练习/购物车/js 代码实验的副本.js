// const input = require('./modules/input');
// (async function(){
// 	let array = []
//
// 	let num1 = parseInt(await input.in('请输入添加的商品编号'));
// 	let num2 = await input.in('请输入添加的商品名称');
// 	let num3 = parseInt(await input.in('请输入添加的商品价格'));
// 	let num4 = parseInt(await input.in('请输入添加的商品数量'));
//
// 	array.push(num1,num2,num3,num4)
// 	array.splice([2])
//
// 	console.log(array)
// 	input.close();
// }())

// 1、初始化商品
// 2、初始化账号
// 3、用户登陆
// 4、选择商品
// 5、加入购物车
// 6、结算商品
// 7、退出系统

const input = require("./modules/input");
(async function () {
  // 定义一个商品数组
  let totalWuqi = [];
  // 首先定义五个武器
  // 把武器放到数组里面  编号  名称  价格   库存   说明
  let wuqi1 = [1000, "AK-47", 1343, 1, "威力大，射程远"];
  let wuqi2 = [1001, "M-4A1", 2343, 1, "威力大，射程远"];
  let wuqi3 = [1002, "98-k", 4343, 1, "威力大，射程远"];
  let wuqi4 = [1003, "GP-92", 5343, 1, "威力大，射程远"];
  let wuqi5 = [1004, "86-1", 6343, 1, "威力大，射程远"];
  totalWuqi.push(wuqi1, wuqi2, wuqi3, wuqi4, wuqi5);

  // 这是存放账号的地方
  let totalZhangHao = [];
  // 定义 两个账号  用户名 密码
  let zhanghao1 = [1, 12];
  let zhanghao2 = [10010, 123456];
  totalZhangHao.push(zhanghao1, zhanghao2);

  // 外层使用循环 使用户可以重复输入
  let a = 0;
  while (true) {
    if (a === 1) {
      break;
    }

    // 判断用户输入的账号

    // root 用户名
    let root = await input.in("请输入用户名");
    root = parseInt(root);
    // password 密码
    let password = await input.in("请输入密码");
    password = parseInt(password);

    // 判定是否的登陆成功
    let loginFlag = 0;
    for (let i = 0; i < totalZhangHao.length; i++) {
      let indexZhangHao = totalZhangHao[i];
      let zhanghao = indexZhangHao[0];
      let mima = indexZhangHao[1];
      if (zhanghao === root && mima === password) {
        console.log("登陆成功");
        loginFlag = 1;
        break;
      }
    }

    //判断用户输入账号或者密码错误 就结束程序
    if (loginFlag === 0) {
      console.log("用户名或密码错误，请重新登陆");
      a = 1;
      continue;
    }

    // 用 户 输 入 账 号 正 确 才 能 来 到 这 里

    //定义了一个购物车
    let gouwuch = [];
    // 总价格
    let totalPrice = 0;

    console.log("====武器商城====");
    console.log("武器商城==>首页");

    while (true) {
      console.log(
        "1.查看商品分类\n2.选购商品\n3.添加商品\n4.购物车\n5.结算商品\n6.退出系统"
      );
      shuru = await input.in("请选择");
      shuru = parseInt(shuru);

      if (shuru === 1) {
        //商品分类
        console.log("1.按价格从低到高\n2.按价格从高到低");
        let xuanze = parseInt(await input.in(""));
        if (xuanze == 1) {
          for (let i = 0; i < totalWuqi.length; i++) {
            for (let j = 0; j < totalWuqi.length - i - 1; j++) {
              if (totalWuqi[j] > totalWuqi[j + 1]) {
                let solo = totalWuqi[j];
                totalWuqi[j] = totalWuqi[j + 1];
                totalWuqi[j + 1] = solo;
              }
            }
          }
          console.log(totalWuqi);
        } else if (xuanze === 2) {
          for (let i = 0; i < totalWuqi.length; i++) {
            for (let j = 0; j < totalWuqi.length - i - 1; j++) {
              if (totalWuqi[j] < totalWuqi[j + 1]) {
                let solo1 = totalWuqi[j];
                totalWuqi[j] = totalWuqi[j + 1];
                totalWuqi[j + 1] = solo1;
              }
            }
          }
          console.log(totalWuqi);
        } else {
          console.log("从新选择");
        }
      } else if (shuru === 2) {
        //选购商品
        console.log(totalWuqi);
        // 第一步 添加用户输入
        // 第二步 查找商品
        // 第三步 将用户要的商品添加到  gouwuche 这个空数组里面
        // 第四步 打印用户的购物车
        let xuanze1 = parseInt(await input.in("请输入您购买商品的编号"));
        for (let i = 0; i < totalWuqi.length; i++) {
          // 这个是商品
          let indexWuqi = totalWuqi[i];
          // 找到商品的编号
          let number = indexWuqi[0];
          // 判断该商品是否是用户选择的
          if (xuanze1 === number) {
            // 编号一样，就找到了这个商品
            // 找到商品加入购物车，然后退出
            gouwuch.push(indexWuqi);
            break;
          }
        }

        // 结束，输出购物车里的信息
      } else if (shuru === 3) {
        //添加商品
        console.log("欢迎来到添加商品，请认真阅读提示");
        let bianhao = parseInt(await input.in("请输入您添加商品的编号"));
        let mingzi = await input.in("请输入您添加商品的编号");
        let jiage = parseInt(await input.in("请输入您添加商品的编号"));
        let shuliang = parseInt(await input.in("请输入您添加商品的编号"));
        // tianjia.push()
        totalWuqi.push([bianhao, mingzi, jiage, shuliang]);
      } else if (shuru === 4) {
        console.log(gouwuch);
        let omit1 = parseInt(
          await input.in("1.删除商品\n2.返回\n 请输入您的选择")
        );
        if (omit1 === 1) {
          let omit2 = parseInt(await input.in("请输入您要删除的商品编号"));
          for (let i = 0; i < gouwuch.length; i++) {
            if (omit2 === gouwuch[i][0]) {
              gouwuch.splice(i, 1);
            } else {
              console.log("没有找到你输入的商品");
            }
          }
        }
      } else if (shuru === 5) {
        //结算商品
        for (let i = 0; i < gouwuch.length; i++) {
          // 找到每一个商品信息
          let indexA = gouwuch[i];
          // 找到商品的价格
          let price = indexA[2];
          // 计算新的总金额  = 当前金额 + 旧的总金额
          totalPrice = price + totalPrice;
        }
        console.log("本次消费", totalPrice);
      } else if (shuru === 6) {
        //退出系统
        a = 1;
        break;
      }
    }
  }

  input.close();
})();
