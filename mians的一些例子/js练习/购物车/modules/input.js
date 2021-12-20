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
const io = require('readline').createInterface({
    input:process.stdin,
    output:process.stdout
});

function inputSync(notice){
    return new Promise(res=>{
        io.question(notice,answer => res(answer));
    });
}

module.exports = {
    in:inputSync,
    close:()=>io.close()
}