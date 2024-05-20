package _05_Class.practice04;

abstract public class Shape {
    String color;
    String type;

    public Shape(String color, String type) {
        setColor(color);
        setType(type);
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    abstract void calculateArea();
}
