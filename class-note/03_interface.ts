interface User {
    age : number;
    name: string;
}

// 변수에 인터페이스 활용
let seho : User = {
    age : 33,
    name: '세호'
}

// 함수에 인터페이스 활용
function getUser(user: User) {
    console.log(user);
}

const whykk = {
    name : '여경',
}

// 함수의 스펙(구조)에 인터페이스를 활용
interface SumFunction {

}

var sum: SumFunction;
sum = function(a: number, b: number): number {
    return a+b;
}

// 인덱싱
interface StringArray {
    [index:number]
}

var arr= ['a', 'b', 'c''}