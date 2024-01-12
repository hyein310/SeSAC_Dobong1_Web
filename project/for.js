// let number = prompt('숫자입력');
// for(let i = 0; i <= number; i++){
//     if(i%13 === 0 && i%2 === 1) console.log(i);
// }

// let num = 9;
// let multi = 1;

// for(let i = 2; i <= 9; i++){
//     for(let j = 1; j <= 9; j++){
//     multi = i * j;
//     console.log(i,'x',j,'=',multi);
//     }
// }





let numb = 0;
let sum = 0;
while(numb <= 100) {
    if(numb % 2 === 0 || numb % 5 === 0) {
        sum += numb
    }
    numb++;
}
console.log(sum);