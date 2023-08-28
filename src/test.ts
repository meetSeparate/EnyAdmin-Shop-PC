// interface personInter {
//     name: string
//     age: number
//     gender: string
//
//     speak(): void
//
//     run(): void
// }
//
//
// class Person implements personInter {
//     name: string
//     age: number
//     gender: string
//
//     constructor(name:string, age:number, gender:string) {
//         this.name=name
//         this.age=age
//         this.gender=gender
//     }
//
//     speak() {
//         console.log('说话')
//     }
//
//     run() {
//         console.log('跑步')
//     }
// }



// const a = function <T>(a: T):T {
//     return a
// }
//
// a<string>('hello')


interface Test {
    length: number
}

function test<T extends Test>(length: T) {
    return length
}


class Script implements Test {
    length: number;

    constructor(length) {
        this.length = length
    }
}

let script = new Script('123')