// 接口可以提取不同类中的一些共性，因为通过继承无法实现
// readOnly 只读，?可选
interface Person{
    readonly id: number
    name: string;
    age?: number;
}

let sc: Person = {
    id: 123,
    name: 'sc',
}
