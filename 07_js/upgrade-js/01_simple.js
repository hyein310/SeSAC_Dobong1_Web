// 구조분해 할당
// 1. 배열의 구조 분해 할당

const arr = ['tomato', 'kiwi', 'banana'];
console.log(arr[2]);
const [to, ki, ba] = arr;
console.log(ki);

const arr2 = ['빨', '주', '노', '초'];
const [red, orange, green] = arr2;
console.log(red, green);

let x = 'first';
let y = 'second';
[x, y] = [y, x];
console.log(x, y);

let x2 = 'first';
let y2 = 'second';
let temp;
temp = x2;
x2 = y2;
y2 = temp;

// 2. 객체의 구조 분해 할당
const obj = {
    title: '제목',
    content: '내용',
    number: 0,
};

console.log(obj.title);

const { title: t2, content, number } = obj;
// console.log(title2);
console.log(t2);

// 전개 구문...
const arr3 = [1, 2, 3, 4, 5];
const arr4 = ['a', 'b', 'c'];

console.log(arr3);
console.log(arr4);

for (let el of arr3) {
    console.log(el);
}

console.log(...arr3);

// [1,2,3,4,5,'a','b','c']
// concat : 배열 이어주는 메소드
const arr5 = arr3.concat(arr4);
const arr6 = [...arr3, ...arr4];
console.log('======================');
console.log(arr5);
console.log(arr6);

const str = 'khihigh';
let strToArr = [...str];
// 배열 -> 문자열 : join
let strToArr2 = str.split('');
console.log(strToArr);
console.log(strToArr2);

// object spread
const me1 = {
    name: 'khi',
    height: 161,
    friend: null,
    married: false,
};
const me2 = {
    name: '혜인',
    like: ['코딩하기', '놀러가기'],
    greeting: function () {
        // 함수에서 접근 위해서는 this 필요
        console.log(`안녕하세요. 제 이름은 ${this.name}이고요, zlsms ${this.height}입니다.`)
    },
};

//spread 사용시 중괄호 사용!!
let me3 = { ...me1, ...me2 };
// 값이 똑같다면 뒤에 값이 불러와진다.
console.log(me3);


// spread 실습
const word1 = 'abc';
const word2 = 'xyz';

const word = { ...word1, ...word2 };
console.log(word);



const obj2 = {
    title: '제목',
    content: '내용',
    num: 0,
    key4: 'value4',
    key5: 'value5',
};

// 뽑히고 난 후 나머지는 obj3에 새로운 배열로 저장
const { title: a, content: b, num: c, ...obj3 } = obj2;
console.log(obj3);
console.log('================');

function test(...value) {
    // rest는 제일 마지막에 위치해야함
    const [a,b,...rest] = value
    console.log(a);
    console.log(b);
    console.log(rest);    
}

test(1,2,3,4,5,6);

// quiz
// 매개변수가 몇개가 들어오든 합산해주는 함수 addNumber()
function addNumber(...rest){
    let sum = 0
    rest.forEach((el) => {
        sum += el;
    });
    // sum = a + b + rest;
    return sum;
}

let result = addNumber(1,2,3,4,5,6,7);  //28
console.log('-------------------------')
console.log(result);