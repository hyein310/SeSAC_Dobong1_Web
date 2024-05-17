package _05_Class.c_final;

public class FinalVariableEx {
    public static void main(String[] args) {
        // read only 형식, const 형식과 비슷
        final int finalNumber = 10;
        // finalNumber = 20; --> 변경 불가능
        System.out.println("finalNum: " + finalNumber);
    }
}
