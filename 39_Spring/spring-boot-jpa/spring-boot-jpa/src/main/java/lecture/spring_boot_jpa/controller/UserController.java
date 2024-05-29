package lecture.spring_boot_jpa.controller;

import lecture.spring_boot_jpa.dto.ResErrorDTO;
import lecture.spring_boot_jpa.dto.UserCreateDTO;
import lecture.spring_boot_jpa.dto.UserDTO;
import lecture.spring_boot_jpa.entity.UserEntity;
import lecture.spring_boot_jpa.service.UserService;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@RestController // 모든 메소드가 responcebody 자동으로 생성
@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserService userService;

    // GET localhost:8080/user
    // @GetMapping("")
    // public List<UserEntity> getUsers() {
    //     // service에서 호출
    //     return userService.getUsers();
    // }

    // ResponseEntity
    // 적절한 응답 코드 및 본문을 생성해주는 역할을 함.
    @GetMapping("")
    public ResponseEntity<List<UserEntity>> getUsers() {
        List<UserEntity> users = userService.getUsers();
        return ResponseEntity.ok(users); // ok(응답할 값)
        // return ResponseEntity.ok().body(users);  위의 방법과 동일
    }

    @GetMapping("/name/{name}")
    // <?> : 자바의 와일드 카드, 여러 가지 형태로 들어오거나 어떤 형태가 들어오는지 모를 때 사용
    public ResponseEntity<?> getUserByName(@PathVariable String name) {
        List<UserEntity> users =  userService.getUsersByName(name); // 배열에 값을 담고

        // [for]문 이용
        // List<UserDTO> resUsers = new ArrayList<>(); // 담을 객체
        //
        // for (int i = 0; i < users.size(); i++) {
        //     UserDTO user = UserDTO.builder()
        //             .id(users.get(i).getId())
        //             .name(users.get(i).getName())
        //             .nickname(users.get(i).getNickname())
        //             .no(i+10)
        //             .build();
        //
        //     resUsers.add(user);
        // }


        // [Stream] 이용
        List<UserDTO> resUsers = users.stream()
                .map(user -> UserDTO.builder()
                        .id(user.getId())
                        .name(user.getName())
                        .nickname(user.getNickname())
                        .no(user.getId() + 10)
                        .build()) // 여기까지만 하면 Stream 형태
                .collect(Collectors.toList()); // List 형태로 변환해줌.

        return ResponseEntity.ok(resUsers);
    }

    @GetMapping("/id/{id}")
    public ResponseEntity<?> getUserById(
            @PathVariable int id
    ) {
        try {
            return ResponseEntity.ok(userService.getUserById(id));
        }
        catch (Exception e) {
            // 400 번대 에러
            return ResponseEntity.badRequest().body(e.getMessage()); // userService에서 선언해뒀던 메세지
        }
    }

    // insert, update, delete
    @PostMapping("")
    public ResponseEntity<?> insertUser(@RequestBody UserCreateDTO user) {
        try{
            UserEntity newUser = userService.insertUser(user);
            UserDTO userDTO = UserDTO.builder()
                    .id(newUser.getId())
                    .name(newUser.getName())
                    .nickname(newUser.getNickname())
                    // .no() 안하면 빈 값으로 넘어감
                    .build();

            return ResponseEntity.ok(newUser);
        }
        catch (Exception e) {
            // int형이 아닌 string 형이 들어왔을 때
            return ResponseEntity.badRequest().body(
                    ResErrorDTO.builder()
                            .error(e.getMessage())
                            .build()
            );
        }
    }

    @PatchMapping("/{id}")
    public ResponseEntity<?> patchUser(
            @RequestBody UserCreateDTO user,
            @PathVariable int id
    ) {
        try{
            UserEntity updateUser = userService.updateUser(user, id);
            return ResponseEntity.ok(updateUser);
        }
        catch (Exception e) {
            return ResponseEntity.badRequest().body(
                    ResErrorDTO.builder()
                            .error(e.getMessage())
                            .build()
            );
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteUser(
            @PathVariable int id
    ) {
        try{
            userService.deleteUser(id);
            return ResponseEntity.ok().body(userService.deleteUser(id));
        }
        catch (Exception e) {
            return ResponseEntity.badRequest().body(
                    ResErrorDTO.builder()
                            .error(e.getMessage())
                            .build()
            );
        }
    }
}
