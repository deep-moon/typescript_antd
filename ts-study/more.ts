// 类型别名 type aliases
type PlusType = (x: number, y: number) => number
function sum(x: number, y: number): number{
    return x+ y;
}
const sum2: PlusType = sum;

//  联合类型下的使用场景
type NameResolver = () => string
type NameOrResolver = string | NameResolver
function getName(n: NameOrResolver): string{
    if(typeof n === 'string'){
        return n;
    }else{
        return n();
    }
}
//  type assertion
function getLength(input: string | number) : number {
    // const str = input as String;
    // if(str.length){
    //     return str.length
    // }else{
    //     const str = input as Number;
    //     return str.toString().length
    // }
    if((<String> input).length){
        return (<String> input).length
    }else{
        (<Number> input).toString().length
    }
}