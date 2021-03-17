// //  函数声明
// //  可选参数要放在最后
// function add(x: number , y: number, z?: number):number{
//     if(typeof z === 'number'){
//         return x + y +z
//     }
//     return x + y;
// }

// let result = add(1,2)

const add = function add(x: number , y: number, z: number = 10):number{
    if(typeof z === 'number'){
        return x + y +z
    }
    return x + y;
}
const add2: (x: number, y: number, z?: number) => number = add

//  类型推断
let str = 'sc'
