package _05_Class.practice04;

public class Circle extends Shape {
    int r;

    public Circle(String color, String type, int r) {
        super(color, type);
        this.r = r;
    }

    @Override
    public String getColor() {
        return super.getColor();
    }

    @Override
    public void setColor(String color) {
        super.setColor(color);
    }

    @Override
    public String getType() {
        return super.getType();
    }

    @Override
    public void setType(String type) {
        super.setType(type);
    }

    @Override
    void calculateArea() {
        System.out.println("도형의 넓이: " + r * r * Math.PI);
    }
}
