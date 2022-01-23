// 变量声明提高效率
const enum Direction {
    Up = 'UP',
    Down = 'DOWN',
    Left = 'LEFT',
    Right = 'RIGHT',
}

let value = 'UP'
if (value === Direction.Up) {
    console.log('go up!')
}
