package detalks_test.demo.controller;

import detalks_test.demo.dto.QuestionCreateDto;
import detalks_test.demo.dto.ResErrorDto;
import detalks_test.demo.entity.QuestionEntity;
import detalks_test.demo.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/questions")
public class QuestionController {
    @Autowired
    private QuestionService questionService;

    @GetMapping("")
    public ResponseEntity<?> getQuestions() {
        List<QuestionEntity> questions = questionService.getQuestions();

        return ResponseEntity.ok(questions);
    }

    @PostMapping("")
    public ResponseEntity<?> createQuestion(@RequestBody QuestionCreateDto question) {
        try{
            QuestionEntity newQuestion = questionService.createQuestion(question);
            return ResponseEntity.ok(newQuestion);
        }
        catch (Exception e) {
            return ResponseEntity.badRequest().body(
                    ResErrorDto.builder()
                            .error(e.getMessage())
                            .build()
            );
        }
    }

    @PatchMapping("/{question_id}")
    public ResponseEntity<?> updateQuestion(
            // @Auth~~~~ userid
            @PathVariable int question_id,
            @RequestBody QuestionCreateDto question
    ) {
        try {
            Long tempMem = 2L;
            return ResponseEntity.ok(questionService.updateQuestion(tempMem, question_id, question));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(
                    ResErrorDto.builder().error(e.getMessage()).build()
            );
        }
    }

    @DeleteMapping("/{question_id}")
    public ResponseEntity<?> deleteQuestion(
            @PathVariable int question_id
    ) {
        try {
            return ResponseEntity.ok(questionService.deleteQuestion(question_id));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(
                    ResErrorDto.builder().error(e.getMessage()).build()
            );
        }
    }
}
