package _02_control_statement;

import java.util.Scanner;

public class Practice02 {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        double r = scan.nextDouble();
        System.out.printf("반지름이 %f 인 원의 넓이: %f", r, circle(r)).println();
        int x = scan.nextInt();
        int y = scan.nextInt();
        System.out.printf("가로 %d, 세로 %d인 직사각형의 넓이: %f", x, y, sqaure(x, y)).println();
        int x1 = scan.nextInt();
        int y1 = scan.nextInt();
        System.out.printf("밑변 %d, 높이 %d인 삼각형의 넓이: %f", x1, y1, triangle(x1, y1)).println();

    }

    public static double circle(double r) {
        return r * r * Math.PI;
    }

    public static double sqaure(double x, double y) {
        return x * y;
    }

    public static double triangle(double x, double y) {
        return x * y * 0.5;
    }
}
