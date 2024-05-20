package _05_Class.practice01;

public class Dog extends Animal {
    public Dog() {
        // Animal d1 = new Animal();
        super.setName("네로");
        super.setType("강아지");
        super.setAge(4);
        System.out.println("이름은 " + getName() + " 종은 " + getType() + " 나이는 " + getAge());
    }

    @Override
    public void makeSound(String t) {
        super.makeSound("멍멍");
    }
}
