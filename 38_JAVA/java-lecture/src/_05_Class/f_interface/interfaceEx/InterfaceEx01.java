package _05_Class.f_interface.interfaceEx;

interface Move {
    void moveForward();

    void moveBackward();
}

interface Power {
    void powerOn();

    void powerOff();
}

// interface에서 interface로 상속할 떄는 "extends"
// 다중 상속 가능
// - implements: 클래스가 인터페이스를 구현할 때
interface Car extends Move, Power {
    void changeGear(int gear);
}

class Suv implements Car {
    // ctrl + O: 오버라이딩 단축키
    @Override
    public void moveBackward() {
        System.out.println("후진");
    }

    @Override
    public void moveForward() {
        System.out.println("전진");
    }

    @Override
    public void changeGear(int gear) {
        System.out.println("기어 변경" + gear);
    }

    @Override
    public void powerOn() {
        System.out.println("시동 On");
    }

    @Override
    public void powerOff() {
        System.out.println("시동 Off");
    }
}

public class InterfaceEx01 {
    public static void main(String[] args) {
        Suv s1 = new Suv();
        s1.powerOn(); // Power interface 메소드
        s1.moveBackward(); // Move interface 메소드
        s1.changeGear(2); // Car interface 의 메소드
    }
}
