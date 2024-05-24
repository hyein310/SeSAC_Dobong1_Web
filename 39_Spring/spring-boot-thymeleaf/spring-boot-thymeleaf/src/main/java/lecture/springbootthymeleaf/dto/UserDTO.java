package lecture.springbootthymeleaf.dto;

import lombok.Getter;
import lombok.Setter;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Getter // 모든 필드에 대해 getter를 자동으로 생성
@Setter // 모든 필드에 대해 setter를 자동으로 생성
public class UserDTO {
    private String name;
    private int age;
}
