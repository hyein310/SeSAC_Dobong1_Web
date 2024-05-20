package _05_Class.practice06;

abstract public class Vehicle {
    String name;
    int maxSpeed;

    public Vehicle(String name, int maxSpeed) {
        setName(name);
        setMaxSpeed(maxSpeed);
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getMaxSpeed() {
        return maxSpeed;
    }

    public void setMaxSpeed(int maxSpeed) {
        this.maxSpeed = maxSpeed;
    }

    abstract void move();
}
