// # 타입 호환 예제 - interface, class
interface TypeCompatibilityDev {
    name : string;
    skill : string;
}

// interface TypeCompatibilityPerson {
//     name : string;
// }

// var developer:TypeCompatibilityDev;
// var person:TypeCompatibilityPerson;

// // person은 skill 속성이 없어서 호환 불가
// developer = person;

// // developer에 name 속성이 있기때문에 호환 가능
// person = developer;

class TypeCompatibilityPerson {
    name : string;
}

var developer:TypeCompatibilityDev;
var person:TypeCompatibilityPerson;

developer = new TypeCompatibilityPerson();

// # 함수
var add = function(a:number) {
    // ...
}

var sum = function(a:number, b:number) {
    // ...
}

// sum은 add보다 큰 함수, sum이 add가 제공하는 옵션보다 더 많이 제공하기때문
add = sum;
sum = add;

// # 제네릭
interface Empty<T> {
    // ..
}

var empty1: Empty<string>;
var empty2: Empty<number>;

empty1 = empty2;
empty2 = empty1;

interface NotEmpty<T> {
    data : T;
}

var notEmpty1 : NotEmpty<string>;
var notEmpty2 : NotEmpty<number>;

notEmpty1 = notEmpty2;
notEmpty2 = notEmpty1;
