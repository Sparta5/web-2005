// 第一题
// Promise.resolve()
//   .then(() => {
//     console.log(1);
//   })
//   .catch(() => {
//     console.log(2);
//   })
//   .then(() => {
//     console.log(3);
//   });

// 第二题
Promise.resolve()
  .then(() => {
    // 返回 rejected 状态的 promise
    console.log(1);
    throw new Error("erro1");
  })
  .catch(() => {
    // 返回 resolved 状态的 promise
    console.log(2);
  })
  .then(() => {
    console.log(3);
  });
