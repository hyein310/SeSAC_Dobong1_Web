package detalks_test.demo.service;

import detalks_test.demo.dto.QuestionCreateDto;
import detalks_test.demo.dto.QuestionDto;
import detalks_test.demo.entity.MemberEntity;
import detalks_test.demo.entity.QuestionEntity;
import detalks_test.demo.repository.MemberRepository;
import detalks_test.demo.repository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuestionService {
    @Autowired
    private QuestionRepository questionRepository;

    @Autowired
    private MemberRepository memberRepository;

    @Autowired
    private MemberService memberService;

    public List<QuestionEntity> getQuestions() {
        return questionRepository.findAll();
    }

    // 질문 생성
    public QuestionEntity createQuestion(QuestionCreateDto question) {
        // 질문 생성 시 필요한 것. title, content, member

        // MemberEntity memberCheck = memberService.getMembers(question.getMember_idx());
        //
        // memberRepository.findById(question.getMember_idx())
        //         .orElseThrow(() -> new RuntimeException("회원 로그인이 되어있지 않습니다."));

        QuestionEntity newQuestion = QuestionEntity.builder()
                .question_title(question.getQuestion_title())
                .question_content(question.getQuestion_content())
                .build();

        return questionRepository.save(newQuestion);
    }

    // 질문 수정
    public QuestionEntity updateQuestion(Long userid, int question_id, QuestionCreateDto question) {
        // QuestionEntity memberId = questionRepository.findByMemberId(member_idx)
        //         .orElseThrow(() -> new RuntimeException("아이디가 다릅니다."));

        if(!question.getMemberIdx().equals(userid)) {
            throw new RuntimeException("수정 권한이 없습니다.");
        }

        QuestionEntity exist = questionRepository.findById(question_id)
                .orElseThrow(() -> new RuntimeException("존재하지 않는 질문입니다."));

        QuestionEntity updateQuestion = QuestionEntity.builder()
                .question_id(exist.getQuestion_id())
                .question_title(question.getQuestion_title())
                .question_content(question.getQuestion_content())
                .build();

        return questionRepository.save(updateQuestion);
    }

    // 질문 삭제
    public QuestionEntity deleteQuestion(int question_id) {
        QuestionEntity exist = questionRepository.findById(question_id)
                .orElseThrow(() -> new RuntimeException("존재하지 않는 질문입니다."));

        questionRepository.delete(exist);
        return exist;
    }
}
