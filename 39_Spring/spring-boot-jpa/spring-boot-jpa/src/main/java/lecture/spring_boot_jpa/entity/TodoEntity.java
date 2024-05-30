package lecture.spring_boot_jpa.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.apache.catalina.User;
import org.hibernate.annotations.ColumnDefault;

@Entity
@Table(name = "todo")
@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class TodoEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(nullable = false, length = 30)
    private String title;

    @Column(nullable = false) // , columnDefinition = "boolean default false"
    @ColumnDefault("false")
    private Boolean done;

    // 외래키가 존재하는 엔티티에 column 설정
    @ManyToOne // todo의 입장에서 봤을 때 user와 다대일 관계
    @JoinColumn(name = "userId") // foreign 키를 걸 컬럼 .. db 입장에서는 snake case로 바꿈
    @JsonBackReference // User와 Todo 사이의 순환참조가 발생하는 것을 방지. 어노텐션이 없을 경우 서로 계속 참조됨
    private UserEntity user;

}
