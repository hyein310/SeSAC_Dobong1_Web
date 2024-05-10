package _01_java_prac;

import java.util.Scanner;

public class Practice02 {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        System.out.println("나이를 입력하세요.");
        int age = scan.nextInt();

        if (1 <= age && age <= 7) {
            System.out.println("유아");
        } else if (8 <= age && age <= 13) {
            System.out.println("초등학생");
        } else if (14 <= age && age <= 16) {
            System.out.println("중학생");
        } else if (17 <= age && age <= 19) {
            System.out.println("대학생");
        } else if (20 <= age) {
            System.out.println("성인");
        }

        System.out.println("이름을 입력하세요");
        String name = scan.next();
        if (name.equals("홍길동")) {
            System.out.println("남자");
        } else if (name.equals("홍길동")) {
            System.out.println("여자");
        } else {
            System.out.println("모르겠어요.");
        }
    }
}
