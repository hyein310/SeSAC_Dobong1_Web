package _05_Class;

// Student 클래스 사용
public class StudentEx {
    public static void main(String[] args) {
        Student s1 = new Student("hyein", 2);

        /*
         * js로 굳이 표현하자면
         * s1 = {
         *   name: "hyein",
         *   grade: 2,
         *   .. 하위 메소드들
         * }
         * */

        // 두 개는 같음. class에서 호출할 때 자동으로 toString 호출 됨
        System.out.println(s1); // _05_Class.Student@b4c966a
        System.out.println(s1.toString()); // Student {name = "hyein", grade=2} --> 재정의

        // 반환값 없이 출력만 해주는 메소드
        s1.goToSchool();
        s1.study("Java");

        // 반환값 있는 메소드
        System.out.println(s1.getGrade()); // s1 인스턴스가 가진 grade값을 반환하는 메소드
        System.out.println(s1.getTestResult(100));

        Student s2 = new Student("Claudia", 1);
        System.out.println(s2);
        System.out.println("s2 인스턴스의 이름: " + s2.name);
        System.out.println("s2 인스턴스의 학년: " + s2.grade);
        
    }
}
