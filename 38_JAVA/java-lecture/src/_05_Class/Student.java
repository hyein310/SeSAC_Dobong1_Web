package _05_Class;
// 패키지? 여러 클래스를 가지고 있는 디렉토리
// 클래스를 유일하게 만들어주는 식별자

public class Student {
    // 1. 클래스의 필드 (변수)
    public String name;
    public int grade;


    // 2. 클래스의 메소드
    // 2-1. 클래스의 생성자
    public Student(String name, int g) {
        // Student s1 = new Student("hyein");
        // 생성자의 인자를 이용해서 클래스의 필드를 초기화할 수 있다!
        this.name = name; // this(자기자신의 name을 String으로 들어오는 name으로 변경) --> 클래스의 변수 초기화
        this.grade = g; // grade=g; this 키워드를 사용하지 않아도 초기화가 가능하지만, 의미를 명확하게 하기 위해서 this를 작성하는 것이 일반적
    }

    // 2-2. 클래스의 (생성자가 아닌) 메소드
    public void goToSchool() { // 반환값 x, 매개 변수 x
        System.out.println("학교에 갑니다.");
    }

    public void study(String Subject) { // 반환값 x, 매개 변수 o
        System.out.println(Subject + "공부중..");
    }

    public int getGrade() { // 반환값 o, 매개변수 x
        return this.grade;
    }

    public String getTestResult(int score) {
        return this.name + "학생의 점수는: " + score;
    }

    @Override
    // 상속을 받는 관계에서 부모 클래스에 있는 메소드를 자식 클래스에서 메소드 재정의 하는 것
    public String toString() {
        // return getClass().getName()+"@"+Integer.toHexString((hashCode()));
        return "Student {name = \"" + name + "\", grade=" + grade + "}";
    }
}

