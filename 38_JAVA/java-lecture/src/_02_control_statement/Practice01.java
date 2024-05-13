package _02_control_statement;

import java.util.Scanner;

public class Practice01 {
    public static void main(String[] args) {
//        System.out.println("숫자 두 개를 입력하세요.");

        Scanner scan = new Scanner(System.in);
//        double a = scan.nextInt();
//        double b = scan.nextInt();
//
//        System.out.println("덧셈 결과 : " + add(a, b));
//        System.out.println("뺄셈 결과 : " + minus(a, b));
//        System.out.println("나눗셈 결과 : " + dev(a, b));
//        System.out.println("곱셈 결과 : " + multi(a, b));

//        Scanner scan = new Scanner(System.in);
        System.out.println("숫자를 입력하세요.");
        int num = scan.nextInt();
        for (int i = 1; i <= num; i++) {
            System.out.print(i + " ");
        }
    }

    public static double add(double a, double b) {
        return a + b;
    }

    public static double minus(double a, double b) {
        return a - b;
    }

    public static double dev(double a, double b) {
        return a / b;
    }

    public static double multi(double a, double b) {
        return a * b;
    }

}
