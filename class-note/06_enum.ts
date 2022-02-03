// enum Shoes {
//     // default 0 (1씩 증가)
//     Nike,
//     Adidas
// }

// var myShoes = Shoes.Nike;


// 문자형
enum Shoes {
    Nike = '나이키',
    Adidas = '아디다스'
}

var myShoes = Shoes.Nike;
console.log(myShoes); // 나이키

// 이넘 활용
function askQuestion(answer:string) {
    if (answer === 'yes') {
        console.log('정답입니다');
    }
    if (answer === 'no') {
        console.log('오답입니다');
    }
}

askQuestion('Yes');
askQuestion('Y');
askQuestion('N');

enum Answer {
    Yes = 'Y',
    No = 'N'
}

function askQuestion2(answer:Answer) {
    if (answer === Answer.Yes) {
        console.log('정답입니다');
    }
    if (answer === Answer.No) {
        console.log('오답입니다');
    }
}

askQuestion2(Answer.Yes);