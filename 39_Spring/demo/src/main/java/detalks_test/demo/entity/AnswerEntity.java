package detalks_test.demo.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

@Entity
@Getter
@Builder
@Table(name = "answers")
@AllArgsConstructor
@NoArgsConstructor
public class AnswerEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long answer_id;

    @Column(nullable = false)
    private String answer_content;

    @CreationTimestamp
    private String a_created_at;

    @CreationTimestamp
    private String a_modified_at;

    @Column(nullable = false)
    @Builder.Default
    private Boolean answer_state = true;

    @ManyToOne
    @JoinColumn(name = "question_id", nullable = false)
    @JsonBackReference
    private QuestionEntity question_id;
}
