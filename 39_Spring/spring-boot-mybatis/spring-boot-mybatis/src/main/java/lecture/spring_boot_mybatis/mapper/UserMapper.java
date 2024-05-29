package lecture.spring_boot_mybatis.mapper;

import lecture.spring_boot_mybatis.domain.User;
import lecture.spring_boot_mybatis.dto.UserCreateDTO;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper // Spring 에게 해당 interface가 mapper 역할을 하는 interface임을 알림
public interface UserMapper {
    List<User> retrieveAll(); // retrieveAll 모든 유저를 조회

    // ver1. xml과 매핑
    // void insertUser(UserCreateDTO user)


    // ver2. 여기서 sql 작성
    @Insert("INSERT INTO user(name, nickname) values(#{name}, #{nickname})")
    void insertUser(UserCreateDTO user);
    void updateUser(User user); // domain 객체가 들어옴
    void deleteUser(User user);
}
