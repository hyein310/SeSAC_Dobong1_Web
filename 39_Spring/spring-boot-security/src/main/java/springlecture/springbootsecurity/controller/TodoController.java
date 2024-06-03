package springlecture.springbootsecurity.controller;

import jakarta.servlet.http.HttpSession;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/todo")
public class TodoController {
    @GetMapping
    // customAuthFilter의 자료형과 같게 맞춰야함
    public String getTodo(@AuthenticationPrincipal String userId) {
    //     public String getTodo(HttpSession session) {
        // @AuthenticationPrincipal : SecurityContextHolder에 담아둔 정보를 가져옴
        // return "success getTodo " + session.getAtrribute("userId");
        return "success getTodo " + userId;
    }
}
