package _05_Class.practice06;

public class Airplane extends Vehicle implements Flyable {

    public Airplane(String name, int maxSpeed) {
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
        System.out.println("하늘을 날아가는 중");
    }

    @Override
    public void fly() {
        System.out.println("고도 10,000 피트 에서 비행중");
    }
}
