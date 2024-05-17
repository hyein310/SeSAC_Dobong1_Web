package _05_Class.practice;

import java.util.Scanner;

public class Circle {
    public int radius;

    public Circle(int r) {
        this.radius = r;
        calculagteArea(r);
    }

    public static final double PI = Math.PI;

    public double calculagteArea(int r) {
        return r * r * PI;
    }

    public static void main(String[] args) {
        System.out.println("원의 반지름을 입력하세용: ");
        Scanner scan = new Scanner(System.in);
        Circle circle = new Circle(scan.nextInt());
        System.out.println("원의 반지름: " + circle.radius);
        System.out.println("원의 넓이: " + circle.calculagteArea(circle.radius));
    }
}

