package _03_array;

import java.util.Scanner;

public class Practice01 {
    public static void main(String[] args) {
        System.out.println("5개의 정수를 입력하세요.");
        Scanner scan = new Scanner(System.in);
        int[] arr1 = new int[5];
        int sum = 0;
        for (int i = 0; i < arr1.length; i++) {
            arr1[i] = scan.nextInt();
            sum += arr1[i];
        }
        System.out.println("평균은 " + (double) sum / 5);
    }

}
