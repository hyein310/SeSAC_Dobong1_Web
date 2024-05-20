package _05_Class.practice06;

public class Car extends Vehicle {

    public Car(String name, int maxSpeed) {
        super(name, maxSpeed);
        setName(name);
        setMaxSpeed(maxSpeed);
    }

    @Override
    public String getName() {
        return super.getName();
    }

    @Override
    public void setName(String name) {
        super.setName(name);
    }

    @Override
    public int getMaxSpeed() {
        return super.getMaxSpeed();
    }

    @Override
    public void setMaxSpeed(int maxSpeed) {
        super.setMaxSpeed(maxSpeed);
    }

    @Override
    void move() {
        System.out.println("도로를 따라 이동 중");
    }
}
