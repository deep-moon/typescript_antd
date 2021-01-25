//  峰封装
class Animal {
    readonly name: string;
    static categoies: string[] = ['mammal', 'bird'];
    static isAnimal(a){
        return a instanceof Animal
    }
    constructor(name: string){
        this.name = name
    }
    run() {
        return `${this.name} is run`
    }
}

console.log(Animal.categoies)
const snake = new Animal('sc')
console.log(Animal.isAnimal(snake))
//  继承
class Dog extends Animal{
    bark() {
        return `${this.name} is barking`
    }
}

const xiaoming = new Dog('xiao ming')

// 多态
class Cat extends Animal{
    constructor(name){
        super(name)
        console.log(this.name)
    }
    run(){
        return `Meow, ${super.run()}`
    }
}

const mao = new Cat('mao')
// console.log(mao.run())