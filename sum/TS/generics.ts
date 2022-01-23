function echo<T>(arg: T): T {
    return arg
    // if (typeof arg === 'string') {

    // }
}
console.log(echo(123))

function swap<T, U>(tuple: [T, U]): [U, T] {
    return [tuple[1], tuple[0]]
}
console.log(swap(['string', 1243]))

// 约束泛型
function echoWhithArr<T>(arg: T): T {
    console.log(arg.length)// err:类型“T”上不存在属性“length”。
    return arg
}
interface IWithLength {
    length: number
}
function echoWithLength<T extends IWithLength>(arg: T): T {
    console.log(arg.length)
    return arg
}
echoWithLength('str')
const result3 = echoWithLength({ length: 10 })
const result4 = echoWithLength([1, 2, 3])

// 泛型和 interface
interface KeyPair<T, U> {
    key: T;
    value: U;
}
let kp1: KeyPair<number, string> = { key: 1, value: 'yyy' }
let kp2: KeyPair<string, number> = { key: 'fss', value: 3 }