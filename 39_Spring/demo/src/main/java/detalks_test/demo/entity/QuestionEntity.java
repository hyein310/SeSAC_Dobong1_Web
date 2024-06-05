package detalks_test.demo.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.sql.Timestamp;
import java.util.List;

@Entity
@Table(name = "questions")
@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class QuestionEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    // @Column(nullable = false)
    private long question_id;

    @Column(nullable = false, length = 30)
    private String question_title;

    @Column(nullable = false, length = 255)
    private String question_content;

    @CreationTimestamp
    @Column(nullable = false, columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
    private Timestamp q_created_at;

    @UpdateTimestamp
    @Column(nullable = false, columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP")
    private Timestamp q_modified_at;

    @Column(nullable = false, length = 100)
    private int q_view_count;

    @Column(nullable = false, length = 100)
    private int q_vote_count;

    @Column(nullable = false)
    @Builder.Default
    private Boolean question_state = true;

    @ManyToOne
    @JoinColumn(name = "member_idx", nullable = false)  // 차후에 탈퇴 회원 관리시 nullable을 true로 바꿀 필요있음
    @JsonBackReference
    private MemberEntity member_idx;

    @OneToMany(mappedBy = "question_id", cascade = CascadeType.ALL, orphanRemoval = true) // 질문 삭제 시 관련 답변 자동 삭제
    @JsonManagedReference
    private List<AnswerEntity> answers;
}
