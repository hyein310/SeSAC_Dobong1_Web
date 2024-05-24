package lecture.springbootthymeleaf.controller;

import lecture.springbootthymeleaf.dto.UserDTO;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.stream.IntStream;

@Controller
@RequestMapping("/axios")
public class axiosPrac {
    @GetMapping("")
    public String get() {
        return "prac/axiosForm";
    }

    @GetMapping("/form")
    public String get(
            Model model) {
        int[] years = IntStream.rangeClosed(1970, 2024).toArray();
        int[] months = IntStream.rangeClosed(1, 12).toArray();
        int[] dates = IntStream.rangeClosed(1, 31).toArray();

        model.addAttribute("birthYear", years);
        model.addAttribute("birthMonth", months);
        model.addAttribute("birthDate", dates);

        return "prac/axiosForm";
    }

    @PostMapping("/form")
    @ResponseBody
    public String prac2Res(
            // @RequestParam(value = "name") String name,
            // @RequestParam String gender,
            // @RequestParam int birthYear,
            // @RequestParam int birthMonth,
            // @RequestParam int birthDate,
            // @RequestParam String[] interests,
            // Model model
            @RequestBody UserDTO user
    ) {

        // String interest = String.join(",", interests);

        // model.addAttribute("name", name);
        // model.addAttribute("gender", gender);
        // model.addAttribute("birthYear", birthYear);
        // model.addAttribute("birthMonth", birthMonth);
        // model.addAttribute("birthDate", birthDate);
        // model.addAttribute("interests", interest);

        return user.getName() + " 님 회원가입 성공";
    }

}
