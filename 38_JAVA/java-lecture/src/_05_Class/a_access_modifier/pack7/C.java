package _05_Class.a_access_modifier.pack7;

import _05_Class.a_access_modifier.pack6.A;

// A class를 상속 받지 않는 외부 class
public class C {
    void methodC() {
        // A a = new A(); // import를 해도 protected 접근제한자는 접근 불가능. class에는 접근 가능하나, 생성자에 접근 불가능
    }
}
