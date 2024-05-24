package lecture.springbootthymeleaf.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.stream.IntStream;

@Controller
public class introduceController {
    @GetMapping("")
    public String get() {
        return "prac/p3";
    }

    @GetMapping("/introduce/{name}")
    public String getName(
            @PathVariable String name,
            Model model) {
        model.addAttribute("name", name);
        return "prac/p3";
    }

    @GetMapping("/introduce2")
    public String getNameAge(
            @RequestParam String name,
            @RequestParam int age,
            Model model) {
        model.addAttribute("name", name);
        model.addAttribute("age", age);
        return "prac/p3";
    }

    @GetMapping("/formReq")
    public String getForm(Model model) {
        int[] years = IntStream.rangeClosed(1970, 2024).toArray(); // 1970부터 2024까지 숫자를 배열화
        int[] months = IntStream.rangeClosed(1, 12).toArray(); // 1970부터 2024까지 숫자를 배열화
        int[] dates = IntStream.rangeClosed(1, 31).toArray(); // 1970부터 2024까지 숫자를 배열화

        model.addAttribute("yy", years);
        model.addAttribute("mm", months);
        model.addAttribute("dd", dates);
        return "prac/p4";
    }

    @PostMapping("/formRes")
    public String postForm(
            @RequestParam String name,
            @RequestParam String gender,
            @RequestParam String yy, // select option값은 list 형태로 넣어주기..
            @RequestParam String mm,
            @RequestParam String dd,
            // @RequestParam(required = false) String travel,
            // @RequestParam(required = false) String fashion,
            // @RequestParam(required = false) String food,
            @RequestParam String[] hobby,
            Model model) {

        String hobbys = String.join(",", hobby); // checkbox의 값을 배열로 전달받아서 join으로 , 단위의 문자열으로 변경시킴

        model.addAttribute("name", name);
        model.addAttribute("gender", gender);
        model.addAttribute("yy", yy);
        model.addAttribute("mm", mm);
        model.addAttribute("dd", dd);
        // model.addAttribute("travel", travel);
        // model.addAttribute("fashion", fashion);
        // model.addAttribute("food", food);
        model.addAttribute("hobbys", hobbys);


        return "prac/p4_res";
    }

}
