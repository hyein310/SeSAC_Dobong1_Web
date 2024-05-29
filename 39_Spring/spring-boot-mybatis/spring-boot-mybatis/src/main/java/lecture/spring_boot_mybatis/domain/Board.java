package lecture.spring_boot_mybatis.domain;

import java.sql.Timestamp;
import java.text.SimpleDateFormat;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class Board {
    private int id;
    private String title;
    private String content;
    private String writer;
    private String registered;
    private String no;
    // Timestamp currentTimestamp = new Timestamp(System.currentTimeMillis());
    // String currentTimestampToString = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss").format(currentTimestamp);
}

