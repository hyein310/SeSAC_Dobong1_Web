package _05_Class.practice05;

public class CdPlayer implements Music {
    String song;

    public CdPlayer(String song) {
        this.song = song;
    }

    @Override
    public void play() {
        System.out.println("CD 플레이어에서 " + song + " 음악 재생합니다.");
    }

    @Override
    public void stop() {
        System.out.println("CD 플레이어에서 " + song + " 음악 정지합니다.");
    }
}
