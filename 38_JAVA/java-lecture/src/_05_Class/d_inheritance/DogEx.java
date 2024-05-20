package _05_Class.d_inheritance;

public class DogEx {
    public static void main(String[] args) {
        Dog d1 = new Dog();
        d1.sayHello(); // Animal 에서 상속받은 메소드
        d1.fetch(); // Dog 에서 추가한 메소드
        System.out.println("-------dog class make sound------");
        d1.makeSound(" 멍멍"); // 메소드 오버라이딩

        // 부모 클래스로 인스턴스 생성
        Animal cat = new Animal();
        System.out.println("----- animal class makeSound -----");
        cat.makeSound("야옹");
    }

}
