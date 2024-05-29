package lecture.spring_boot_jpa.entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity // 해당 클래스가 Entity 임을s 명시, 기본 생성자를 필요로 함
@Table(name = "user") // user라는 테이블과 해당 클래스를 매핑
@Getter
@Builder // 전체 필드를 받는 생성자를 필요로 함.
@NoArgsConstructor // 기본 생성자
@AllArgsConstructor // 전체 필드를 받는 생성자
// Entity와 Builder를 동시에 사용할 경우, 해당 어노테이션이 필요로 하는 생성자들을 명시
public class UserEntity {
    @Id // PK primary key 지정
    @GeneratedValue(strategy = GenerationType.IDENTITY) // auto_increment 옵션과 동일
    private int id;

    @Column(name = "name", nullable = false, length = 10) // 이름이 name 이고 null값을 허용하지 않으며 20글자만 가능한 속성
    private String name;

    @Column(name = "nickname", nullable = false, length = 20)
    private String nickname;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL) // user 테이블을 맵하고 연쇄작용
    @JsonManagedReference // 참조를 관리..
    private List<TodoEntity> todos;
}
