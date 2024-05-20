package _05_Class.practice05;

public class MusicPlayer {
    public static void main(String[] args) {
        System.out.println("===== MP3 Player =====");
        Mp3 m1 = new Mp3("아이유 블루밍");
        m1.play();
        m1.stop();

        System.out.println("===== CD Player =====");
        CdPlayer c1 = new CdPlayer("아이유 꽃갈피");
        c1.play();
        c1.stop();
    }


}
