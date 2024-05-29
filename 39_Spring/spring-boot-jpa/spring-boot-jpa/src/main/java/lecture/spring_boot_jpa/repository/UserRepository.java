package lecture.spring_boot_jpa.repository;

import lecture.spring_boot_jpa.entity.UserEntity;
import org.apache.catalina.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

// JpaRepository <entity class, 테이블의 pk 자료형>
@Repository
public interface UserRepository extends JpaRepository<UserEntity, Integer> {
    // 여기서는 선언만 해주면 됨. 본문은 알아서 생성
    // List<UserEntity> findAll(); 기본 제공
    List<UserEntity> findByName(String name); // 속성명이 name인 값을 찾을 때
    Optional<UserEntity> findById(int id); // null 일 수도 있고 값이 존재 할 수도 있음. 있으면 UserEntity 없으면 null

    // raw query 이용
    // jpa 자체적인 sql(?) -> JPQL
    // JPQL: Java Persistence Query Language
    @Query(nativeQuery = true, value = "SELECT * FROM user WHERE name = :name")
    // @Query("SELECT u FROM UserEntity u WHERE u.name = :name")
    // UserEntity 뒤에는 실제 존재하는 객체가 와야함.
    List<UserEntity> findByNameCustom(String name);
}
