package _05_Class.d_inheritance;

public class Dog extends Animal {
    @Override
        // 어노테이션 생략 가능
        // 오버라이딩할 때는 함수의 이름, 반환 타입 인자의 개수와 타입이 같아야 함
    void makeSound(String t) {
        System.out.print(super.name); // 부모의 필드에 접근
        super.makeSound("멍멍"); // 멍멍, 부모 메소드 호출
        // System.out.println(t); // 야옹, 멍멍, ..
    }

    // 자식 클래스 메소드 추가
    void fetch() {
        System.out.println("공 가져와!");
    }

    /*
     * Overriding: 상속이 일어났을 때 자식 클래스에서 메소드를 재정의 하는 것
     * - 부모 메소드 재정의시, 내용의 일부만 변경되더라도 처음부터 다시 정의
     *      부모 메소드가 1000줄이어도 1000줄 모두 새로 써줘야 함!
     * - 이 때, super 를 이용하면 내용을 그대로 가져올 수 있다.
     *      super.method(): 숨겨진 부모 메소드 호출
     * */
}
