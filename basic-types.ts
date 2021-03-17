let isDone : boolean = false

let age:number = 23
let binaryNumber: number = 0b1111

let firstName: string = 'sc'
let message:string = `hello, ${firstName}, age is ${age}`

//  undefined和null是所有类型的子类型
//  undefined表示一个"无"的原始值，转为数值为NaN
//  null表示一个"无"的对象，转为数值为0
let u:undefined = undefined
let n:null = null

let num:number = undefined

//  可以接受任何类型
let notSure:any = 4

// union types 联合类型
let numberOrString: number | string = 4
numberOrString = '123'
numberOrString = 123
// numberOrString = true

let arrrOfnumbers: number[] = [1,2,3]
arrrOfnumbers.push(4)

//  类数组，不是数组，是对象，只是key值为0,1,2
// function test(){
//     console.log(arguments)
// }

//  元组限定了数据类型的数组
let user: [string, number] = ['sc', 1]