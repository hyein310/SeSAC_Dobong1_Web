package _05_Class.b_static;

// 정적 초기화 블록 (static)
public class Laptop {
    static String company = "LG";
    static String model = "그램";
    static String info;

    static {
        // 정적 초기화 블록
        // - 초기화를 여기에서 할 수도 있음
        // - 복잡한 초기화를 하고 싶을 때 사용
        // - 초기화 하는 순서를 제어하고 싶을 때 사용
        // info = company+model;
        if (true) {
            info = company + model;
        } else {
            info = "LG 컴퓨터가 아닙니다.";
        }
    }
}
