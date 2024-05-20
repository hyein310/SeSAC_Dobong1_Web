package _05_Class.a_access_modifier.pack7;

import _05_Class.a_access_modifier.pack6.A;

// 외부 패키지에 있는 클래스이지만
// A class를 상속받는 클래스
public class D extends A {
    void methodD() {
        // super(); // 생성자 부르기
        this.field1 = 11;
        this.methodA();
    }
}
