package _04_Exeception;

import java.util.*;

public class Practice01 {
    public static void main(String[] args) {

        /* Practice 01 */
//        int[] str1 = new int[4];
//        for (int i = 0; i < 5; i++) {
//            try {
//                str1[i] = i + 1;
//                System.out.println(str1[i]);
//            } catch (ArrayIndexOutOfBoundsException e) {
//                System.out.println("인덱스가 범위를 벗어났습니다.");
//            }
//        }


        /* Practice 02 */
//        System.out.println("배열 크기를 입력하세요.");
//        Scanner scan = new Scanner(System.in);
//        int num = scan.nextInt();
//        int[] arr1 = new int[num];
//        int sum = 0;
//        for (int i = 0; i < arr1.length; i++) {
//            System.out.println("배열 요소를 입력하세요");
//            try {
//                arr1[i] = scan.nextInt();
//
//            } catch (InputMismatchException e) {
//                System.out.println("예외 발생: " + e.getMessage());
//            }
//            sum += arr1[i];
//        }
//        System.out.println("평균: " + sum / arr1.length);


        /* Practice 03 */
        System.out.println("배열 크기를 입력하세요: ");
        Scanner scan = new Scanner(System.in);

        try {
            int size = scan.nextInt();
            if (size <= 0) {
                // throw 문을 통해서 예외 생성
                throw new IllegalArgumentException("배열의 크기는 1 이상이어야 합니다.");
            }
            int[] arr = new int[size];

            // 배열의 요소를 size==(arr.length)의 개수만큼 입력
            for (int i = 0; i < size; i++) {
                System.out.println("정수 " + (i + 1) + ": ");
                arr[i] = scan.nextInt();
            }

            ArrayList<Integer> duplicates = findDuplicates(arr);

            // 중복된 요소가 없다면(빈 배열)
            if (duplicates.isEmpty()) {
                System.out.println("중복된 요소가 없어요");
            } else {
                System.out.println("중복 요소: " + duplicates);
            }
        } catch (InputMismatchException e) {
            System.out.println("입력 형식이 맞지 않습니다.");
        } catch (IllegalArgumentException e) {
            System.out.println(e.toString());
        } finally {
            scan.close();
        }
    }

    public static ArrayList<Integer> findDuplicates(int[] arr) {
        // arr= [1,2,2,3,5]
        ArrayList<Integer> duplicates = new ArrayList<>();

        // 중복된 요소를 찾아서 duplicates 배열에 넣기: duplicates.add(중복된 요소)
        /*
         * [1,2,2,3,5]
         * 1 vs 2,2,3,5
         * 2 vs 2,3,5
         * 2 vs 3,5
         * 3 vs 5
         * */

        // 이중 for문
        for (int i = 0; i < arr.length - 1; i++) {
            for (int j = i + 1; j < arr.length; j++) {
                if (arr[i] == arr[j] && !duplicates.contains(arr[i])) {
                    // 중복된 요소가 있는 것 && duplicates에 없는 요소만 추가
                    duplicates.add(arr[i]); // [2]
                }
            }
        }
        return duplicates;
    }
}
