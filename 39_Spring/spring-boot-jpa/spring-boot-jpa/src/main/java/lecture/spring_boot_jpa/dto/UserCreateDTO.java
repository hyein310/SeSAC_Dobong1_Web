package lecture.spring_boot_jpa.dto;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
// create 하거나 update할 때 사용할 dto
public class UserCreateDTO {
    private String name;
    private String nickname;
}
