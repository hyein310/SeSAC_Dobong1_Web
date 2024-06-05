package detalks_test.demo.dto;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class QuestionCreateDto {
    private String question_title;
    private String question_content;
    private Long memberIdx;
}
