// 简单使用
function echo <T> (arg: T): T{
    return arg;
}

const result = echo(true)

function swap<T, U>(tuple: [T,U]): [U, T]{
    return [tuple[1], tuple[0]]
}
const result2 = swap(['string', 123])

// 约束泛型
function echoWithArr<T>(arg: T[]): T[]{
    console.log(arg.length)
    return arg;
}
const arrs = echoWithArr([1,2,3])

interface IWithLength{
    length: number
}
function echiWithLength<T extends IWithLength>(arg: T ): T{
    console.log(arg.length)
    return arg;
}
const str1 = echiWithLength('123')
const ogj = echiWithLength({length: 10, width: 10})
const arr2 = echiWithLength([1,2])

class Queue<T>{
    private data = [];
    push(item: T){
        return this.data.push(item)
    }
    pop(): T{
        return this.data.shift();
    }
}

const queue = new Queue<number>();
queue.push(1.2)
console.log(queue.pop().toFixed())

const queue2 = new Queue<string>();
queue2.push('str')
console.log(queue2.pop().length)

interface KeyPair<T,U>{
    key: T;
    value: U;
}
let kp1: KeyPair<number, string> = {key: 123, value: 'ad'}
let kp2: KeyPair<string, number> = {key: '123', value: 123}

let arr: number[] = [1,2,3]
let arrTwo: Array<number> = [1,2,3]

//  interface 描述函数
interface IPlus<T>{
    (a: T, b: T): T
}
function plus(a: number, b: number): number{
    return a + b;
}
const a: IPlus<number> = plus