/*
 * @Author: your name
 * @Date: 2021-12-12 11:11:16
 * @LastEditTime: 2021-12-12 15:45:48
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \js练习\modules\input.js
 */
// const io = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
//
// function inputSync(notice) {
//     return new Promise(res => {
//         io.question(notice, answer => res(answer));
//     });
// }
const io = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function inputSync(notice) {
  return new Promise((res) => {
    io.question(notice, (answer) => res(answer));
  });
}
// let line = io.on("line", (input) => {
//   console.log(`Received: ${input}`);
// });

module.exports = {
  in: inputSync,
  close: () => io.close(),
  //   line,
};
