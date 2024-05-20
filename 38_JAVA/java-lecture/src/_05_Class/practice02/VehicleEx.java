package _05_Class.practice02;

import java.util.ArrayList;
import java.util.Arrays;

public class VehicleEx {
    public static void main(String[] args) {
        System.out.println("======= Bus 정보 =======");
        ArrayList<Bus> BusList = new ArrayList<>();
        Bus b1 = new Bus("Hyundai", "City Bus", 2022, 30);
        BusList.add(b1);
        System.out.println(BusList);

        b1.powerOn();
        b1.drive();
        b1.powerOff();

        System.out.println("======= Car 정보 =======");
        ArrayList<Car> CarList = new ArrayList<>();
        Car c1 = new Car("Toyota", "Camry", 2023, true);
        CarList.add(c1);
        System.out.println(CarList);

        c1.powerOn();
        c1.parking();
        c1.powerOff();

        System.out.println("======= Motorcycle 정보 =======");

        ArrayList<Motocycle> MototyleList = new ArrayList<>();
        Motocycle m1 = new Motocycle("Harley-Davidson", "Sportster", 2021, 'A');
        MototyleList.add(m1);
        System.out.println(MototyleList);

        m1.powerOn();
        m1.action();
        m1.powerOff();
    }
}
