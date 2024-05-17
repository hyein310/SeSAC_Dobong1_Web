package _05_Class.practice;

import java.util.ArrayList;
import java.util.List;

public class Student {
    public String name;
    public int student_ID;
    public int grade;
    public static int totalStudents = 0;

    public Student(String name, int student_ID, int grade) {
        this.name = name;
        this.student_ID = student_ID;
        this.grade = grade;
        totalStudents++;

    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getStudent_ID() {
        return student_ID;
    }

    public void setStudent_ID(int student_ID) {
        this.student_ID = student_ID;
    }

    public int getGrade() {
        return grade;
    }

    public void setGrade(int grade) {
        this.grade = grade;
    }

    public void displayInfo() {

        for (int i = 0; i <= totalStudents; i++) {
            System.out.println("=====학생 정보=====");
            System.out.println("이름: " + getName());
            System.out.println("학번: " + getStudent_ID());
            System.out.println("학년: " + getGrade());
        }
        System.out.println("총 학생 수는 " + totalStudents + "명 입니다.");

    }

    public static void main(String[] args) {
        List<Student> li = new ArrayList<>();
        Student st1 = new Student("김새싹", 20231001, 1);
        Student st2 = new Student("박지은", 20231002, 2);
        Student st3 = new Student("이은지", 20231002, 3);

        li.add(st1);
        st1.displayInfo();
        li.add(st2);
        st2.displayInfo();
        li.add(st3);
        st3.displayInfo();
    }


}
