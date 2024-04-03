function printSome<T> (x:T, y:T): T {
    console.log(x);
    console.log(y);
    return y;
}

printSome<number>(1,2);
printSome<string>("hi","hello");

function printSome2<T, K> (x:T, y:K): void {
    console.log(x);
    console.log(y);
}
printSome2<number, string>(1, "안녕하세용");

function arrLength1(arr: any[]): number {
    return arr.length;
}

function getValue1(value: any): any {
    return value;
}

// generic으로 만들어보기
function arrLength2<T>(arr: T[]): number {
    return arr.length;
}
console.log(arrLength2<number>([1,2,3,4,5]));

function getValue2<T>(value: T): T {
    return value;
}
console.log(getValue2<any>([1,2,3,4,5]));  // 타입 num[]로 가능


function arrElement<T>(arr: T[], num: number): T|boolean {
    if (num > arr.length) {
        return false;
    }
    else return arr[num];
}
console.log("============");
console.log(arrElement<number|boolean>([1,2,3,4,5],3));


// --------- interface & generic ------------
interface Phone<T> {
    company: string;
    createAt: Date;
    option: T;
}

// T타입으로 string 사용
const iphone15:Phone<string> = {
    company: "apple",
    createAt: new Date("2023-10-13"),
    option:" black",
};

type inphoneOption = {
    color: string;
    storage: number;
}

const iphone16:Phone<inphoneOption> = {
    company: "apple",
    createAt: new Date("2024-10-06"),
    option: {
        color: "silver",
        storage: 256,
    },
};

console.log(iphone15);
console.log(iphone16);

// 타입 스크립트는 초기화된 값을 바탕으로 타입을 자동 추론함
let aa = 1;
let bb = "string";
let cc = true;

// aa = "안녕하세요."  // err (aa가 number 형으로 자동 추론됨)