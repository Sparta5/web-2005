function getLength(input: string | number): number {
    const str = input as string
    if (str.length) {
        return str.length
    } else {
        // const number=input as number
        return input.toString().length
    }
}
console.log(getLength(1234))

function getLength2(input: string | number) {
    if (typeof input === 'string') {
        return input.length
    }
    return input.toString().length
}