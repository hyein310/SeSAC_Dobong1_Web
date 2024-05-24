package lecture.springbootthymeleaf.controller;

import lecture.springbootthymeleaf.dto.UserDTO;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/restapi")
public class RestApiController {
    // RestController를 사용해서 매핑하면 메소드로 값을 리턴한다.

    @GetMapping("/user")
    public String get() {
        String name = "hyein";
        int age = 25;
        return "이름: " + name + "\n 나이 : " + age;
    }

    // 만약 특정 값을 찾기 위해서는 .. params 이용해서 sql 조건문 이용해 찾음
    // @GetMapping("/user")
    // public String get(@RequestParam String word) {
    //     String name = "hyein";
    //     int age = 25;
    //     return "이름: " + name + "\n 나이 : " + age;
    // }

    @PostMapping("/user")
    // post 맨의 raw를 이용해서 json 형태로 보냄
    public String post(@RequestBody UserDTO user) {
        // model 연결 후 db 삽입
        return "이름: " + user.getName() + "\n 나이 : " + user.getAge();
    }

    @PostMapping("/user/{id}")
    // 로그인 된 유저 정보를 처리하기 위해서는 secretscurity 이용
    public String patch(@PathVariable int id, @RequestBody UserDTO user) {
        // model 연결 후 db 삽입
        return id + " 님의 정보 수정: " + user.getName() + "\n 나이 : " + user.getAge();
    }

    @DeleteMapping("/user/{id}")
    public String delete(@PathVariable int id) {
        return id + " 님의 정보 삭제";
    }
}
