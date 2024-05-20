package _05_Class.practice02;

public class Bus extends Vehicle {
    int passengerCapacity;

    public Bus(String brand, String model, int year, int passengerCapacity) {
        super(brand, model, year);
        this.passengerCapacity = passengerCapacity;
    }

    @Override
    void powerOn() {
        System.out.println("차량 시동을 걸었습니다.");
    }

    @Override
    void powerOff() {
        System.out.println("차량을 정지했습니다.");
    }

    @Override
    void drive() {
        System.out.println("승객을 운송합니다.");
    }

    @Override
    void parking() {
        System.out.println("주차했습니다.");
    }

    @Override
    void action() {
        System.out.println("울림통을 합니다.");
    }

    public String toString() {
        return "Bus {brand: " + brand + ", model: " + model + ", year: " + year + ", passengerCapacity=" + passengerCapacity + "}";
    }
}
