// 타입 단언
var a; 
a = 20;
a = 'aa';

var b = a as string;
// typescript의 타입 추론이 아니라 개발자가 작성한 타입으로 간주해라

// DOM API 조작
// 웹페이지의 태그 정보로 접근할 수 있는 API

// <div id = "app">hi</div>
var div = document.querySelector('div');
if(div) {
    div.innerText;
}
