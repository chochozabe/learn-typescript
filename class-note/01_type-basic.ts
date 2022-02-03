// JS 문자열 선언
// var str = 'hello';

// TS 문자열 선언
let str: string = 'hello';

// TS 숫자 선언
let number: number = 10;

// TS 배열 선언
let arr:Array<number> = [1,2,3];
let heroes:Array<string> = ['Capt', 'Thor', 'Hulk', 10];
let items:number[] = [1,2,3];

// TS 튜플 : 모든 인덱스의 타입이 정해져있는 배열
let _address: [string, number]= ['gangnam', 100];

// TS 객체
let obj: object = {};
let person: object = {
    name : 'capt',
    age: 100
};
let _person: {name:string, age:number} = {
    name : 'capt',
    age: 100
};

// TS 진위값
let show:boolean = true;