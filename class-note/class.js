// ES 2015 (ES6) 문법
function Person(name, age) {
  this.name = name;
  this.age = age;
}

var capt = new Person("캡틴", 100);

class Person {
  // 클래스 로직
  // 기본적으로 인스턴스를 만들어주는 역할
  constructor(name, age) {
    console.log("생성 되었습니다");
    this.name = name;
    this.age = age;
  }
}

var seho = new Person("세호", 30); // 생성 되었습니다

// Prototype : javascript는 prototype 기반의 언어이다.
// 중복되는 코드를 줄이기 위해 prototype 사용
var user = { name: "capt", age: 100 };
var admin = {};

admin.__proto__ = user;
admin.name;
admin.age;
admin.role = "admin";

// 객체를 생성하면 기본적으로 프로토타입에 ojbect 생성자가 존재
