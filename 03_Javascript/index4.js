/* 
    함수
    - 어떤 작업을 수행하기 위해 "독립적으로" 설계된 코드의 집합
    - 함수를 정의(선언)하고 호출(사용)
    - 선언 방식 3가지
        - 함수 선언문
            - 선언 후 어디에서나 사용 가능
        - 함수 표현식
            - 선언 이후에만 사용 가능
        - 화살표 함수
            - 화살표 함수와 함수표현식은 변수에 익명함수를 담아둔 모양
            - 화살표 함수와 함수 표현식은 동일함 (모양만 다름)
*/
// 함수 선언문
function helloWorld1(){
    console.log("hello world1!!")
};

helloWorld1();

// helloWorld2(); >> error!!
// 함수 표현식
const helloWorld2 = function(){
    console.log("hello world2!!");
};

helloWorld2();

// 화살표 함수
const helloWorld3 = () => {
    console.log("hello World3!!")
};

helloWorld3();

// 함수에 인자 (parameter) 전달
function add(num1, num2){
    console.log(num1+num2) // 그냥 출력만 가능
}

console.log(add(1, 3))

/* return
    - 반환 값으로 함수 내부 코드의 '최종 결과 값' 을 가지고 있는 것
    - console.log 등으로 출력하는데 그치지 않고
        값을 저장하고 보관하기 위한 키워드
    - return을 만나면 함수 실행 중단*/

const add1 = function(num1, num2){
    console.log('리턴 전에는 잘 실행돼요')
    return num1 + num2; //return은 값을 반환하여 저장함
    console.log('리턴 후에는 실행되지 않안요')

}

console.log(add1(1, 3));
const result1 = add1(3,5);
const result2 = add(3,5);
console.log(result1)
console.log(result2)

console.log("---------------------------")
const sayHello = function(text){
    return text;
}

console.log(sayHello('hyen'));

function sayHello2(text, name){
    return `${text} ${name}`;
}

console.log(sayHello2('hi','hyen'));

let sayHello3 = function(text){
    return text;
}

console.log(sayHello3("hi"));

const sayHello4 = (text) => {
    return text;
};

console.log(sayHello4("hi"));