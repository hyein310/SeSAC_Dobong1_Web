package _05_Class.practice04;

import _05_Class.practice02.Bus;

import java.util.ArrayList;

public class ShapeEx {
    public static void main(String[] args) {
        ArrayList<Circle> CList = new ArrayList<>();
        Circle c1 = new Circle("Red", "Circle", 6);
        CList.add(c1);
        System.out.println("======= " + c1.type + " 도형의 정보 =======");
        System.out.println("도형의 색상: " + c1.color);
        c1.calculateArea();

        ArrayList<Rectangle> RList = new ArrayList<>();
        Rectangle r1 = new Rectangle("Blue", "Rectangle", 6, 5);
        RList.add(r1);
        System.out.println("======= " + r1.type + " 도형의 정보 =======");
        System.out.println("도형의 색상: " + r1.color);
        r1.calculateArea();
    }

}
