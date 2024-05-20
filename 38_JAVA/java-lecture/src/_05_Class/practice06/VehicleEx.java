package _05_Class.practice06;

import java.util.ArrayList;

public class VehicleEx {
    public static void main(String[] args) {
        Car c1 = new Car("morning", 100);
        Airplane a1 = new Airplane("Asiana", 777);

        ArrayList<Vehicle> vList = new ArrayList<>();
        vList.add(c1);
        vList.add(a1);

        // 객체 instanceof 클래스 or 인터페이스
        System.out.println(c1 instanceof Car); // true
        System.out.println(c1 instanceof Flyable); // false
        // System.out.println(c1 instanceof Airplane); //

        for (int i = 0; i < vList.size(); i++) {
            System.out.println("------- 탈 것 ------");
            vList.get(i).move();

            if (vList.get(i) instanceof Flyable) {
                // vList[i] 가 Flyable 의 인스턴스라면,
                ((Flyable) vList.get(i)).fly();
            }
        }

    }


}
