package _05_Class.a_access_modifier.pack2;

import _05_Class.a_access_modifier.pack1.B;  // alt + enter

public class C {
    // A a;  -> A class는 접근 제한자 default를 가졌기 때문에 접근할 수 없음 (다른 패키지이기 때문)
    B b; // -> B class는 접근 제한자 public을 가졌기 때문에, 어디서든 import만 한다면 사용 가능

    /*
     * C 클래스는 A, B 클래스와 다른 패키지에 있으므로
     * default 제한자인 A 클래스에서는 에러가 발생
     * public 제한자인 B 클래스에서는 정상 동작
     * */
}
