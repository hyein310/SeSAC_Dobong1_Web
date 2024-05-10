package _01_basic_syntax;

public class Casting {
    public static void main(String[] args) {
        // 1. 묵시적 형변환
        /*
         * 더 작은 타입에서 더 큰 타입으로 "자동 변환"
         * */
        int smallNumber = 10;
        System.out.println("small number(int): " + smallNumber);
        double bigNumber = smallNumber;
        System.out.println("bigNumber(double): " + bigNumber);

        // 2. 명시적 형변환
        /* 더 큰 타입에서 더 작은 타입으로 "강제 변환" */
        double anotherBigNumber = 20.8;
        int anotherSmallNumber = (int) anotherBigNumber;
        System.out.println("another Big Number: " + anotherBigNumber);
        System.out.println("another Small Number: " + anotherSmallNumber);

        int largeNumber = 1000;
        byte smallByte = (byte) largeNumber; // 데이터 손실이 일어날 수 있음
        System.out.println("largeNum: " + largeNumber);
        System.out.println("smallByte: " + smallByte); // -24
    }
}
