let isDone : boolean = false

let age:number = 23
let binartNumber: number = 0b1101

let firstName: string = 'sc'
let message:string = `hello, ${firstName}, age is ${age}`

// undefined和null是所有类型的子类型
let u:undefined = undefined
let n:null = null

let num:number = undefined

//  可以接受任何类型
let notSure:any = 4

// union types
let numberOrString: number | string = 4
numberOrString = '123'

let arrrOfnumbers: number[] = [1,2,3]
arrrOfnumbers.push(4)

//  元组限定了数据类型的数组
let user: [string, number] = ['sc', 1]