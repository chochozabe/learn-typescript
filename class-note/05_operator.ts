// function logMessage(value:any) {
//     console.log(value);
//     if(typeof value === 'number') {
//         value.
//     }
// }

// logMessage('Hello');
// logMessage(100);


function logMessage(value : string | number) {
    // 타입에 맞는 API 호출 가능
    if(typeof value === 'number') {
        value.toLocaleString();
    }
    if(typeof value === 'string') {
        value.toString();
    }
    throw new TypeError('value must be string or number');
}

logMessage('Hello');
logMessage(100);

interface Developer {
    name : string;
    skill : string;
}

interface Person {
    name : string;
    age : number;
}

// function askSomeone(someone : Developer | Person) {
//     // 특정 타입 구조체를 유니온 타입으로 사용할땐 공통 속성만 제공
//     console.log(someone.name);

//     // someone.age;
//     // someone.name;
//     // someone.skill;
// }

// askSomeone({name : '디벨로퍼', skill : '웹 개발'});
// askSomeone({name : '캡틴', age : 100});

// var seho : string | number | boolean;
// var capt : string & number & boolean; // type : never

function askSomeone(someone : Developer & Person) {
    // 인터섹션 : 타입 가드가 필요 없이 developer 와 person의 모튼 속성을 만족 (하나의 타입)
    someone.age;
    someone.name;
    someone.skill;
}

askSomeone({name : '디벨로퍼', skill : '웹 개발', age:100});
// askSomeone({name : '캡틴', age : 100});

// 유니온 : 타입가드를 써야하나 호출 시 선택지가 있음