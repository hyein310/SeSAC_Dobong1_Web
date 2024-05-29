package lecture.spring_boot_jpa.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

@Entity
@Table(name = "board")
@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BoardEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    // name 생략 가능
    @Column(name="title", nullable = false, length = 20)
    private String title;

    @Column(name="content", nullable = false, length = 100)
    private String content;

    @Column(name="writer", nullable = false, length = 10)
    private String writer;

    @CreationTimestamp
    // @Column(name="registered", nullable = true, columnDefinition = "TIMESTAMP")
    private String registered;
}
