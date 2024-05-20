package _05_Class.f_interface.interfaceEx;

abstract class MyAbstractClass {
    // extends
    public abstract void abstractMethod();
}

interface MyInterface {
    // implements
    // public abstract 생략 상태
    void interfaceMethod();
}

// 추상 클래스와 인터페이스르 조합해서 사용할 수도 있다.
public class InterfaceEx02 extends MyAbstractClass implements MyInterface {
    @Override
    public void abstractMethod() {
        // 구현 내용은 sub class에서 작성
    }

    @Override
    public void interfaceMethod() {
        // 구현 내용은 sub class에서 작성
    }
}
