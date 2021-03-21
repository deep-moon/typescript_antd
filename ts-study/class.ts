// 封装
// public代表公有是默认选项；
// private是私有的，只有在类中可以访问，实例的对象不可以访问，继承的类无法访问；
// protected表示受控制的，继承的子类可以访问
class Animal {
    // 只能读，无法修改
    readonly name: string;
    //  static是静态属性或方法，直接用Animal.categoies访问，不需要实例对象
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


interface Radio {
    switchRadio(): void;
}
interface Battery{
    checkBatteryStatus();
}
interface RadioWithBattery extends Radio{
    checkBatteryStatus();
}
class Car implements Radio{
    switchRadio(){

    }
}
class Cellphone implements RadioWithBattery{
    switchRadio(){
        
    }
    checkBatteryStatus(){
        
    }
}