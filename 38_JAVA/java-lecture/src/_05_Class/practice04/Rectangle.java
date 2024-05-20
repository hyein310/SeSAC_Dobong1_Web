package _05_Class.practice04;

public class Rectangle extends Shape {
    int width, height;

    public Rectangle(String color, String type, int width, int height) {
        super(color, type);
        this.width = width;
        this.height = height;
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
        System.out.println("도형의 넓이: " + width * height * 0.5);
    }
}
