function add(x: number, y: number, z?: number | string): number {
    if (typeof z === 'number') {
        return x + y + z
    }
    return x + y;
}
console.log(add(1, 2, "1"))

const add2: (x: number, y: number) => number = add
console.log(add2(5, 8))

// interface 描述函数类型
const sum = (x: number, y: number) => {
    return x + y
}
interface ISum {
    (x: number, y: number): number
}
const sum2: ISum = sum