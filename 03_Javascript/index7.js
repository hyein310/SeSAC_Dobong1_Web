// 문자열에서 사용 가능한 속성/메소드
/*
- length
- toUpperCase, trim, indexOf,
    slice, replace, replaceAll, repeat, split
*/

let str1 = "Strawberry Moon";
let str2 = "   Strawberry Moon  ";

// 문자열 인덱싱

console.log(str1[5]);
console.log(str1[5]+str1[0]+str1[8]);

console.log('str1 문자열 길이', str1.length);
console.log('str2 문자열 길이', str2.length);

let msg = "Happy Birthday~";
let userId = "   user123   ";

console.log(msg.toUpperCase());
console.log(msg.toLowerCase());
console.log(str2.trim().length);
console.log(msg.toUpperCase(userId.trim));

let mango = 'applemango';

// indexOf
console.log(mango.indexOf('mango'));  // 5
console.log(mango.indexOf('apple'));  // 0
//문자열에 포함되지 않은 문자열이 매개변수로 들어가면
// -1 반환
console.log(mango.indexOf('x')); // -1

//slice
console.log(mango.slice(5)); //5부터 시작해서 끝까지 (mango)
console.log(mango.slice(3,6)); //3이상 6미만 (lem)
console.log(mango.slice(-1))  // o
console.log(mango.slice(-4)); // ango

// slice해도 실제 문자열은 변하지 않음

let msg2 = 'Wow~ It is so amazing!!!';
console.log(msg2.replace('Wow', 'Hey'));
console.log(msg2.replaceAll('o', 'O'));
console.log(msg2.replace('o', 'O'));  //첫번째만

let date = '2024.1.10';
//2024-1-10
console.log(date.replaceAll('.','-'));
console.log(date);

console.log('abc'.repeat(10));

console.log(date.split('.'));
console.log(date.split(''));

// 배열 관련 메소드
/* 
    - length (속성)
    - push, pop, unshift, shift, indexOf, join, reverse
    - includes, map, forEach, find, fliter
    - for ~ of (함수 아님) 
*/

// let arr1 = [1,2,3,4,5];
// let arr2 = ['quakaa', 'puppy', 'rabbit', 'hamster'];

// arr1[5]= 6;
// arr1[7]= 7;

// console.log(arr1);

// let arr1 = [1,2,3,4,5];
// arr1.push(6);
// arr1.push(7);
// arr1.push(10);
// arr1.pop();
// console.log(arr1);

// arr2.unshift('cat'); //앞에 추가
// console.log(arr2);
// arr2.shift('cat'); // 앞에 삭제
// console.log(arr2);

/* includes(매개변수 한개 - 배열의 요소가 들어감) 데이터타입 상관없음
    - 매개변수로 들어간 욧가 배열에 있으면 true, 없으면 false 
*/
// console.log(arr2.includes('cat'));
// console.log(arr2.includes(1));

let arr2 = ['quakaa', 'puppy', 'rabbit', 'hamster'];
/* indexOf - 문자열의 indexOf와 동일 */
console.log(arr2.indexOf('quakaa'))
arr1.reverse();
console.log(arr1);

/* join - 문자열의 split 메소드와 반대 
    배열을 문자열로 변경
*/

let str1_1 = "Strawberry Moon";
str1_1 = str1_1.split('');
console.log(str1_1);
str1_1 = str1_1.join('+');
console.log(str1_1);

/* 반복문 - for of & forEach */
let arr3 = [5,6,7,8,9];
let alphabets = ['a','b','c','d','e','f'];

for(let i = 0; i < arr3.length; i++){
    console.log(arr3[i]);
}

console.log('------------')
//초기화 안해줘도 됨
for(let a of arr3){
    console.log(a);
}

console.log('--------------')
for(let alphabet of alphabets){
    console.log(alphabet);
}

console.log('--------------')
//forEach - 반복
/*
배열.forEach(function({element[],index,array]})
) 
*/

console.log('--------------')
arr3.forEach(function(element,index,array){
    console.log(element,index,array)
});

// fliter
// return 이후 조건을 만족하는 요소들을 모아서 "배열로" 반환
// let arr2 = ['quakaa', 'puppy', 'rabbit', 'hamster'];

// 1. 함수 표현식
let six1 = arr2.filter(function(word){
    return word.length === 6;
})
console.log(arr2);
console.log(six1);

// 2. 화살표 함수 & return 있는 ver.
let six2 = arr2.filter((word)=>{
    return word.length === 6;
})
console.log(six2);

// 3. 화살표 함수 & return 없는 ver.
// 화살표 함수 때 중괄호를 안쓰면 return 값이 없어도 됨(이미 포함)
let six3 = arr2.filter((word)=> word.length === 6)
console.log(six3);

// map
// 배열 내의 모든 요소에 대해 함수 호출한 결과를 모아서 새로운 "배열로" 반환
let arr4 = [1,2,3,4,5];
let multiArr = arr4.map(function(element){
    return element * 3;
});
console.log(multiArr);

// find
// 배열에서 특정 조건을 만족하는 첫번째 "요소" 반환
let findResult = multiArr.find(function(element){
    return element > 10;
})
console.log(findResult);


//for 문
let arr1=[];
sum = 0;

for(let i = 1; i <= 100; i++){
    arr1[i-1] = i;
    sum += i;
}
console.log(sum);

sum2 = 0;
// for of 문
for(let i of arr1){
     sum2 += i;
}
console.log(sum2);

// forEach
sum3 = 0;
arr1.forEach(function(element){
    sum3 += element;
 });
console.log(sum3);


let fruits1 = ['사과','딸기','파인애플','수박','참외','오렌지','자두','망고'];
let fruits2 = ['수박','사과','참외','오렌지','파인애플','망고'];

let samee = fruits1.filter(function(same1){
    return same1 === fruits2.filter(element);
})
console.log(samee);

let six = arr2.filter(function(word){
    return word.length === 6;
})

// let fruits1 = ['사과','딸기','파인애플','수박','참외','오렌지','자두','망고'];
// let fruits2 = ['수박','사과','참외','오렌지','파인애플','망고'];
let same=[];
let diff=[];


same = fruits1.filter(function(element){
    return fruits2.includes(element);
})
console.log(same);

diff = fruits1.filter(function(element){
    return ! fruits2.includes(element);
})
console.log(diff);