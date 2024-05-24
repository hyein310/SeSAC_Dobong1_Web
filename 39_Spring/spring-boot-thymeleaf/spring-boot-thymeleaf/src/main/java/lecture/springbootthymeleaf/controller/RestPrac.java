package lecture.springbootthymeleaf.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("restprac")
public class RestPrac {
    public String user;
    public String content;

    @GetMapping("/suggest")
    public String get() {
        return "작성자: " + user + "내용: " + content;
    }


}
