package _05_Class.practice01;

public class Cat extends Animal {
    @Override
    public void makeSound(String t) {
        super.makeSound("애옹");
    }

    public Cat() {
        // Animal c1 = new Animal();
        super.setType("고양이");
        super.setName("냐옹이");
        super.setAge(2);
        System.out.println("이름은 " + getName() + " 종은 " + getType() + " 나이는 " + getAge());
    }


}
