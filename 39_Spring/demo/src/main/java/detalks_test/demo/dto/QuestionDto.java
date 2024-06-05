package detalks_test.demo.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class QuestionDto {
    private long question_id;
    private String question_title;
    private String question_content;
    private String q_created_at;
    private long q_view_count;
    private long q_vote_count;
    private Boolean question_state;
    private Long member_idx;
}
