package lecture.spring_boot_mybatis.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserDTO {
    // 응답 해야하는 값만 DTO 객체에 담아 전송
    private int id;
    private String name;
    private String nickname;
    private int no;
}
