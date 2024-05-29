package lecture.spring_boot_jpa.controller;



import lecture.spring_boot_jpa.dto.*;
import lecture.spring_boot_jpa.entity.BoardEntity;
import lecture.spring_boot_jpa.entity.UserEntity;
import lecture.spring_boot_jpa.service.BoardService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("/board")
@Slf4j
public class BoardController {
    @Autowired
    private BoardService boardService;

    @GetMapping("")
    public ResponseEntity<?> getBoards() {
        List<BoardEntity> boards = boardService.getBoards();

        return ResponseEntity.ok(boards);
    }

    @PostMapping("")
    public ResponseEntity<?> insertBoard(@RequestBody BoardCreateDTO board) {
        try{
            BoardEntity newBoard = boardService.insertBoard(board);
            return ResponseEntity.ok(newBoard);
        }
        catch (Exception e) {
            return ResponseEntity.badRequest().body(
                    ResErrorDTO.builder()
                            .error(e.getMessage())
                            .build()
            );
        }
    }

    @PatchMapping("/{id}")
    public ResponseEntity<?> updateBoard(
            @PathVariable int id,
            @RequestBody BoardCreateDTO board
    ) {
        try{
            return ResponseEntity.ok(boardService.updateBoard(id, board));
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
       try {
            return ResponseEntity.ok(boardService.deleteBoard(id));
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