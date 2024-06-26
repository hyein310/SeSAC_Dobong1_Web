package _04_Exeception;

// - Error: 시스템이 비정상적인 상황에 발생한 경우
// - 코드에 의해 수습할 수 없는 심각한 오류
// - OutOfMemoryError, ThreadDeath, ..

/*
 * 일반 예외(Exception, Checked Exception), 실행 예외(Runtime Exception, Unchecked Exception)
 * - 일반 예외
 *   - 확인 시점: 컴파일 시점, 명시적으로 예외처리 반드시 해야함
 *   - IOException, FileNotFoundException
 * - 실행 예외
 *   - 확인 시점: 런타임 시점, 예외 처리가 강제되지 않지만 프로그램의 정상적인 작동을 위해 예외처리를 해주는게 좋다.
 *   - NullPointerException, InputMismatchException
 * */

import java.util.InputMismatchException;
import java.util.Scanner;

public class ExceoptionEx {

    public static String divide(int x, int y) {
        return x + "/" + y + "= " + (x / y);
    }

    public static int getLength(String str) {
        return str.length();
    }

    public static int getValueByIndex(int[] arr, int idx) {
        return arr[idx];
    }

    public static void main(String[] args) {
        System.out.println(divide(6, 2));
        // System.out.println(divide(6, 0));
        // System.out.println("여기까지 나올까용");


        // ##### case1. 0으로 나누기 (ArithmeticException)
        try {
            System.out.println("나누기 연산 시작");
            System.out.println(divide(6, 0));
        } catch (ArithmeticException error) {
            // catch 의 error 부분에는 어떤 에러인지도 명시

            // 방법1. error.getMessage(): 예외가 발생한 이유만 보여줌
            System.out.println("나누기 중 예외 ㅇ발생" + error.getMessage()); // / by zero
            // 방법2. error.toString(): 예외 종류를 리턴
            System.out.println("나누기 중 예외 발생" + error.toString()); // java.lang.ArithmeticException: / by zero
        } finally {
            System.out.println("나누기 연산 종료!");
        }


        // ##### case2. null에 접근 (NullPointerException)
        try {
            System.out.println(getLength("hello"));
            System.out.println(getLength(null));
        } catch (NullPointerException e) {
            System.out.println("단어 길이 연산 중 에러 발생 " + e.getMessage()); // null
            System.out.println("단어 길이 연산 중 에러 발생 " + e.toString()); // java.lang.NullPointerException
        }


        // ##### case3. index 값으로 배열 접근시 범위에 없는 값으로 접근 (ArrayIndexOutOfBoundsException)
        int[] numbers = {10, 20, 30, 40, 50};
        try {
            System.out.println(getValueByIndex(numbers, 2));
            System.out.println(getValueByIndex(numbers, numbers.length));
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("배열 인덱싱 중 예외 발생" + e.getMessage()); // Index 5 out of bounds for length 5
            System.out.println("배열 인덱싱 중 예외 발생" + e.toString()); // java.lang.ArrayIndexOutOfBoundsException: Index 5 out of bounds for length 5
        }


        // ##### case4. 입력 형식 예외 (InputMismatchException)
        Scanner scan = new Scanner(System.in);
        try {
            System.out.println("정수를 하나 입력해주세요..");
            int number = scan.nextInt(); // 정수만 입력 받을 수 있음
            System.out.println("입력한 정수: " + number);
        } catch (InputMismatchException e) {
            System.out.println("입력 형식 예외 발생" + e.getMessage()); // null
            System.out.println("입력 형식 예외 발생" + e.toString()); // java.util.InputMismatchException
        }

    }
}

/*
 * try{}catch(예외 이름 error){}finally{}
 * 1. catch 여러 개 이어서 쓰기 가능
 *   - try{}catch(예외 이름1 error){}catch(예외 이름2 error){}finally{}
 * 2. catch 문 하나에 에러 여러 개 받는 것 가능
 *   - try{}catch(예외1|예외2 error){}
 *       - 예외처리 구문이 비슷할 때
 *       - 두 예외가 상속관계에 있지 않을 때
 *
 * */