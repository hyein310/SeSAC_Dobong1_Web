package _05_Class.e_abstract;

public class Circle extends Shape {
    public Circle(String color) {
        super(color);
    }

    @Override
    void draw() {
        System.out.println("원 그리기");
    }
}
