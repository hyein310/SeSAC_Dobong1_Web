// /* 1. for문 */
// /*
// for(변수 선언과 초기값 할당; 조건식; 증감식)
//     반복할 코드;
// */
// // i++와 i=i+1은 같음
// // i+=2와 i=i+2

// for(let i=0; i < 10; i++){
//     console.log('안녕',i)
// }

// for(let i=0; i < 10; i+=2){
//     console.log('안녕하세요',i)
// }

// // 1 부터 5까지 출력
// for(let i = 1; i < 6; i++){
//     console.log(i);
// }

// for(let i = 0; i < 5; i++){
//     console.log(i+1);
// }

// //감소
// for(let i = 5; i > 0; i--){
//     console.log(i);
// }

// // 1부터 n까지의 덧셈
// let n = 11;
// let sum = 0;

// for(let i = 1; i <= n; i++){
//     sum += i;
// }
// console.log(sum);

// /* 배열과 함꼐 사용하는 for문 */
// let fruits = ['사과', '망고', '오렌지', '망고스틴'];
// console.log(fruits.length); // 배열의 길이 확인
// for(let i = 0; i<fruits.length; i++){
//     console.log('i like',fruits[i]);
// }

// // 배열 요소의 합 구하기
// let numsArr = [99,99,98,85,77];
// let sum2 =0;
// for(let i = 0; i<numsArr.length; i++){
//     sum2 += numsArr[i]
// }
// console.log(sum2);

// /* 2. while 문 */
// /*
// while(조건식){
//     조건이 참일 때 실행할 문장;
//     증감식;
// } 
// */

// let n2 = 1; // while의 초기화 식
// while(n2 <= 5){ // 조건식
//     console.log(n2); // 실행문
    
//     // 증감식이 없으면 무한루프를 돌기 때문에 항상 주의
//     n2++; // 증감식
// }

// n2 = 10;
// while(n2 > 4){
//     console.log(n2);
//     n2--;
// }

//1~10 짝수만 출력 > while문 이용

n2 = 1;
while(n2<=10){
    if(n2%2 === 0){
        console.log(n2)
    }
    n2++;
}

// 1부터 10까지 감수하는데 홀수만 출력
n2 = 10;
while(n2 => 1){
    if(n2%2 === 1){
        console.log(n2);
    }
    n2--;
}

let b = 0;
while(true){
    console.log(b);
    b++;
    if(b > 11) break;
}

console.log('-------------------------');
let sum3 = 0;
for(let i = 0; i < 10; i++){
    if(i%2 === 0) continue;
    // 짝수일 때 반복하지 않고 다음 반복으로 넘김

    sum3 += i;
}

console.log(sum3);

let n3 = 0;
while(confirm('계속 진행할까요?')){
    n3++;
    alert(`${n3}번째 alert 창`)
}