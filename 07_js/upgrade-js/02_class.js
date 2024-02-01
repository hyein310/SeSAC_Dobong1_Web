// class : object를 만들 수 있는 틀!
/*
    속성
    - 만들어진 연도 year
    - 집의 이름 name
    - 창문의 갯수 window
    메소드
    - 건물의 나이 출력 getAge()
    - 창문의 개수 출력 getWindow()

*/

// git bash 키보드 위 방향 버튼 누르면 전 명령어 복사 가능

class House{
    constructor(year, name, window) {
        this.name = name;
        this.year = year;
        this.window = window;
    }

    // 메소드
    getAge() {
        console.log(`${this.name}은 건축한지 ${2024 - this.year}년 됐어요.`);
    }

    getWindow() {
        console.log(`${this.name}의 창문은 ${this.window}개 입니다.`);
    }
}

// const h1 = {
//     name: 'old',
//     year: 1789,
//     window: 1, 
//  ~~~~함수
// }

const house1 = new House(1789,'old', 1);
house1.getAge();
house1.getWindow();
console.log(house1.name);

const house2 = new House(2015, '자이', 10);
house2.getAge();
house2.getWindow();
console.log(house2.age);

console.log('---------------상속-----------------');
// extends 키워드를 사용해서 상속
// House 클래스의 함수와 속성을 사용할 수 있음
// Apartment가 House에 상속 

class Apartment extends House{
    constructor(year, name, window, floor, windowmaker) 
    {
        // 상속을 받는 객체는 super로 구분
        super(year, name, window);
        // 그 외는 선언
        this.floor =floor;
        this.windowmaker = windowmaker;
    }

    getAptInfo() {
        return `${this.year}년에 지어진 ${this.name}.
        총 층수는 ${this.floor}, 창문의 갯수는 ${this.window}`;
    }

    // overriding
    // 부모 클래스의 메소드를 이름은 똑같이 쓰고 싶지만 내용은 다르게 만들고 싶을 때, 메소드 재선언
    getWindow() {
        return(`${this.name}의 창문은 ${this.windowmaker}에서 만들었고, ${this.window}개 입니다.`);
    }

    // getAge() << 상속 받아서 사용 가능

}

// year, name, window, floor, windowmaker
const apt1 = new Apartment(2022, 'reamian', 19, 50, 'KCC');
console.log(apt1.getWindow()); // 오버라이딩 함수, 메소드 재정의
console.log('**********************');

console.log(apt1.getAptInfo()); // 새로운 메소드 정의
apt1.getAge();  // 부모 메소드 그대로 상속
console.log(apt1);

console.log('----------------클래스 상속 실습-----------------');
class Shape{
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    // 넓이 반환 메소드
    getArea() {
        let area = 0;
        area = this.width*this.height;
        return area;
    }
}
let rec1 = new Shape(3,4);
console.log(rec1.getArea());

console.log('----------------클래스 상속 실습 (선택)-----------------');
// 직사각형 클래스
class Rectangle extends Shape{
    constructor(width, height) {
        super(width, height);
    }

    getArea() {
        let area = 0;
        area = this.width*this.height;
        return area;
    }

    // 대각선 길이 구하는 메소드
    getDiagonal() {
        let dia = 0;
        dia = Math.sqrt((this.width**2)+(this.height));
        return dia;
        console.log(`대각선의 길이는 ${this.dia}`);
    }
}


// 삼각형 클래스
class Triangle extends Shape{
    constructor(width, height) {
        super(width, height);
    }

    getArea() {
        let area = 0;
        area = (this.width*this.height)/2;
        return area;
    }
}


// 원 클래스
class Circle extends Shape{
    constructor(width, radius) {
        super(width);
        this.radius = radius;
    }

    getArea() {
        let area = 0;
        area = (this.radius**2)*Math.PI;
        return area;
    }
}

const rect1 = new Rectangle(2,4);
console.log(rect1.getArea());
console.log(rect1.getDiagonal());

const tri1 = new Triangle(2, 4);
console.log(tri1.getArea());

const cir1 = new Circle(2, 4);
console.log(cir1.getArea());