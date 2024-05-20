package _05_Class.practice05;

public class Mp3 implements Music {
    String song;

    public Mp3(String song) {
        this.song = song;
    }

    @Override
    public void play() {
        System.out.println("MP3 플레이어에서 " + song + " 음악 재생합니다.");
    }

    @Override
    public void stop() {
        System.out.println("MP3 플레이어에서 " + song + " 음악 정지합니다.");
    }
}
