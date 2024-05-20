package _05_Class.practice03;

abstract public class Student {
    String name;
    String school;
    int age;
    int number;

    public Student(String name, String school, int age, int number) {
        this.age = age;
        this.name = name;
        this.number = number;
        this.school = school;

        System.out.println("====== " + name + " 학생의 정보 ======");
        System.out.println("학교: " + school);
        System.out.println("나이: " + age);
        System.out.println("학번: " + number);
    }

    abstract void todo();
}
