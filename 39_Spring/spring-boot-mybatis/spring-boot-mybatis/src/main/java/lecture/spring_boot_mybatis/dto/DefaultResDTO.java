package lecture.spring_boot_mybatis.dto;

import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor // 전체 필드를 받는 생성자
public class DefaultResDTO {
    private boolean result;
    private String errMsg;
}
