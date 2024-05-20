package _05_Class.practice01;

public class Animal {
    public String type;
    public String name;
    public int age;

    public Animal() {

    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public void makeSound(String t) {
        System.out.println("동물은 소리를 낸다. " + t);
    }
}
