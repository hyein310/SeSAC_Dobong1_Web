package detalks_test.demo.repository;

import detalks_test.demo.entity.MemberEntity;

import detalks_test.demo.entity.QuestionEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface MemberRepository extends JpaRepository<MemberEntity, Long> {
    Optional<MemberEntity> findByMemberEmail(String memberEmail);
    Optional<MemberEntity> findById(Long memberIdx);
}
