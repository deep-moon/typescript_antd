// 接口可以提取不同类中的一些共性，因为通过继承无法实现
// readOnly 只读，?可选
interface Person{
    readonly id: number;
    name: string;
    age?: number;
}

let sc: Person = {
    id: 123,
    name: 'sc',
}

// sc.id = 456; 
//  readOnly是用在属性上的，const是用在变量上的