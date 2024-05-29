package lecture.spring_boot_mybatis.service;

import lecture.spring_boot_mybatis.domain.User;
import lecture.spring_boot_mybatis.dto.UserCreateDTO;
import lecture.spring_boot_mybatis.dto.UserDTO;
import lecture.spring_boot_mybatis.mapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserService {
    @Autowired
    UserMapper userMapper;

    public List<UserDTO> getUserList() {
        List<User> result = userMapper.retrieveAll();
        List<UserDTO> users = new ArrayList<>();

        for (int i=0; i<result.size(); i++) {
            UserDTO userDTO = new UserDTO();
            userDTO.setId(result.get(i).getId());
            userDTO.setName(result.get(i).getName());
            userDTO.setNickname(result.get(i).getNickname());
            userDTO.setNo(i+1);

            users.add(userDTO);
        }
        return users;
    }

    public void insertUser(UserCreateDTO user) {
        // Mapper에 있는 메소드 호출
        userMapper.insertUser(user);
    }

    public void updateUser(int id, UserCreateDTO user) {
        // Map형태로 넘겨주기 위해 가공
        User updateUser = new User();
        // 차후에 if문 이용 빈 배열이 들어올 경우 원래 값을 사용하는 로직 필요
        updateUser.setId(id);
        updateUser.setName(user.getName());
        updateUser.setNickname(user.getNickname());

        userMapper.updateUser(updateUser);
    }

    public void deleteUser(int id, UserCreateDTO user) {
        User deleteUser = new User();
        deleteUser.setId(id);
        deleteUser.setName(user.getName());
        deleteUser.setNickname(user.getNickname());

        userMapper.deleteUser(deleteUser);
    }
}
