package lecture.spring_boot_jpa.service;

import lecture.spring_boot_jpa.dto.UserCreateDTO;
import lecture.spring_boot_jpa.entity.UserEntity;
import lecture.spring_boot_jpa.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.DeleteMapping;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public List<UserEntity> getUsers() {
        // repository 에서 불러옴
        return userRepository.findAll(); // 기본적으로 제공되기 때문에 repository에 선언되지 않아도 선언 가능
    }

    public List<UserEntity> getUsersByName(String name) {
        // return userRepository.findByName(name);
        return userRepository.findByNameCustom(name);
    }

    public UserEntity getUserById(int id) {
        Optional<UserEntity> user = userRepository.findById(id);
        if(user.isPresent()) {
            // [optionalObj].isPresent(): null인지 아닌지 확인. null이 아니라면 true 출력
            return user.get();
        }
        else {
            throw new RuntimeException("user doesn't exist");
        }
    }

    // 사용자가 입력하는 name, nickname 받아옴
    public UserEntity insertUser(UserCreateDTO user) {
        UserEntity newUser = UserEntity.builder()
                .name(user.getName())
                .nickname(user.getNickname())
                .build();

        return userRepository.save(newUser);
        // .save(entity 객체):  insert/update -> respository에서 자동 생성 됨.
        // pk가 없다면, insert -> 자동 생성되었을 경우
        // pk가 있다면, update
    }

    public UserEntity updateUser(UserCreateDTO user, int id) {
        UserEntity userEntity = userRepository.findById(id)
                .orElseThrow(()-> new RuntimeException("user doesn't exist")); // 조회된 값이 존재하지 않을 경우. 예외처리함 / 존재할 경우 userEntity에 담음

        UserEntity updateUser = UserEntity.builder()
                // .id(id) // 실제로 존재하는 id 인지 판별이 필요. 존재했을 경우에만 변경
                .id(userEntity.getId())
                .name(user.getName())
                .nickname(user.getNickname())
                .build();
        // entity 객체 만들어서 pk 값을 설정한 후 repository.save();
        return userRepository.save(updateUser);
    }

    public UserEntity deleteUser(int id) {
        // userRepository.deleteById(id);  -> pk id로 삭제 .. 오류 발생..?
        // userRepository.delete(실제 삭제할 Entity 객체);  -> entity 정보로 삭제 .. 이 방법이 더 정확하고 커스터마이징 가능

        UserEntity userEntity = userRepository.findById(id)
                .orElseThrow(()-> new RuntimeException("user doesn't exist"));
        userRepository.delete(userEntity);

        return userEntity;
    }
}
