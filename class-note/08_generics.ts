// function logText(text) {
//     console.log(text);
    
//     return text;
// }

// logText('log');
// logText(10);
// logText(true);

// function logText<T>(text: T):T {
//     console.log(text);
    
//     return text;
// }

// logText("hi");
// logText<string>("hi");


// ## 제너릭의 장점
// function logText(text:string) {
//     console.log(text);

//     text.split('').reverse().join('');
//     return text;
// }

// function logNumber(number:number) {
//     console.log(number);

//     return number;
// }

// function logText(text: string | number) {
//     console.log(text);
//     // 지정된 타입들의 교집합, 공통된 api만 사용 가능   
//     return text;
// }

// logText('a');
// logText(10);
// logText(true);
// const num = logNumber(10);

// ## 제너릭의 장점과 타입 추론에서의 이점
// <T> : 받을 타입 지정
// function logText<T>(text: T):T {
//     console.log(text);
//     return text;
// }

// const a= logText<string>('a');
// a.split('');
// logText<number>(10);
// const login = logText<boolean>(true);

// # 인터페이스에 제네릭을 선언하는 방법
// interface Dropdown {
// value : string;
// selected: boolean;
// }

// const obj: Dropdown = {value : 'abc', selected: false};

// interface Dropdown<T> {
//     value : T;
//     selected: boolean;
// }

// const obj: Dropdown<string> = {value : 'abc', selected: false};

// # 제너릭의 타입 제한
// function logTextLength<T>(text: T[]): T[] {
//     console.log(text.length);
//     // 제너릭을 length를 사용할 수 있도록 배열로 명시해서 타입 추론 과정에 힌트를 던져줌
    
//     return text;
// }

// logTextLength(['hi']);

// # 제너릭의 타입 제한 2 - 정의된 타입 사용하기
// interface LengthType {
//     length : number;
// }

// function logTextLength<T extends LengthType>(text: T) :T {
//     console.log(text.length);

//     return text;
// }

// logTextLength('a');
// logTextLength(10);

// # 제너릭의 타입 제한 3 - keyof
interface ShoppingItem {
    name : string;
    price : number;
    stock : number;
}

function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption : T):T {
    return itemOption;
}

// getShoppingItemOption(10);
// getShoppingItemOption('a');

getShoppingItemOption("name");
// key 값만 가능