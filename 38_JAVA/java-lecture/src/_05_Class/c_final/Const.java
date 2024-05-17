package _05_Class.c_final;

public class Const {
    public static final int MAX_VALUE = 100;
    public static final String GREETING = "Hello, World!";

    // only static
    static int MIN_VALUE = 0; // 수정 가능

    // only final
    // 인스턴스에 속해있는 변수 (종속적임)
    // 다른 클래스에서 사용 시 인스턴스 필요
    final String name = "hyein";

}
