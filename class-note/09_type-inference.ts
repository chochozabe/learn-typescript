// # 타입 추론의 기본 1
// 변수를 선언하거나 초기화 할때 타입 추론

// // any
// var a;

// // number
// var b = 10;

// // string
// var c = 'abc';

// function getD(d = 10) {
//     var f = 'hi';

//     return d + f;
// }


// # 타입 추론의 기본 2 - 인터페이스와 제너릭을 이용한 타입 추론 방식
// interface Dropdown<T> {
//     value : T;
//     title : string;
// }

// var shoppingItem: Dropdown<string> = {
//     value : 'abc',
//     title : 'hello'
// }

// # 타입 추론의 기본 3 - 복잡한 구조에서의 타입 추론 방식
// interface Dropdown<T> {
//     value : T;
//     title : string;
// }

// interface DetailedDropdown<K> extends Dropdown<K> {
//     description : string;
//     tag : K;
// }

// var detailedDropdown: DetailedDropdown<string> = {
//     title : 'abc',
//     description : 'ab',
//     value : 'cb',
//     tag : 'bd   '
// }

// var shoppingItem: Dropdown<string> = {
//     value : 'abc',
//     title : 'hello'
// }

// # Best Common Type
// 가장 근접한 타입을 추론한다 (보통 union으로 묶어서 추론)
let arr = [0,1,'arr'];

// # Typescript Language Server
// Intellisence
// LSP - Language Server Protocol