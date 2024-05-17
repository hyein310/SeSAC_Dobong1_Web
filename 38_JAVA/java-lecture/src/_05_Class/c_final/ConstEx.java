package _05_Class.c_final;

public class ConstEx {
    public static void main(String[] args) {
        System.out.println(Const.MAX_VALUE);
        System.out.println(Const.GREETING);
        // Const.MAX_VALUE = 200; --> final이기 때문에 재할당 불가능
        Const.MIN_VALUE = 10;
        System.out.println("min value: " + Const.MIN_VALUE);

        // final 변수 접근
        // System.out.println(Const.name); --> static이 아니기 때문에 인스턴스 생성 후 접근 해야함
        Const c1 = new Const();
        System.out.println(c1.name);
        // c1.name = "claudia"; --> 변경은 안돼용.
    }
}
