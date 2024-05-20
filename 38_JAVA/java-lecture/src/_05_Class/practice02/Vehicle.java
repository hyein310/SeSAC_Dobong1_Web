package _05_Class.practice02;

abstract public class Vehicle {
    String brand;
    String model;
    int year;

    public Vehicle(String brand, String model, int year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    abstract void powerOn();

    abstract void powerOff();

    abstract void drive();

    abstract void parking();

    abstract void action();
}
