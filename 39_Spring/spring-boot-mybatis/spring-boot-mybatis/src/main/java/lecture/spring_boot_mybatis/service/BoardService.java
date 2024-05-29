package lecture.spring_boot_mybatis.service;

import lecture.spring_boot_mybatis.domain.Board;
import lecture.spring_boot_mybatis.dto.BoardCreateDTO;
import lecture.spring_boot_mybatis.dto.BoardDTO;
import lecture.spring_boot_mybatis.dto.UserCreateDTO;
import lecture.spring_boot_mybatis.mapper.BoardMapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@Slf4j
public class BoardService {
    @Autowired
    private BoardMapper boardMapper;

    public List<BoardDTO> getBoardList() {
        List<BoardDTO> boards = new ArrayList<>();
        List<Board> result = boardMapper.getBoards(); // mapper로 결과값을 받아오는 객체
        log.warn("cccccc");
        log.warn("result size {}", result.size());


        for (int i = 0; i < result.size(); i++) {
            // [Setter 이용 ver]
            // BoardDTO boardDTO = new BoardDTO();
            // boardDTO.setId(result.get(i).getId());
            // boardDTO.setTitle(result.get(i).getTitle());
            // boardDTO.setContent(result.get(i).getContent());
            // boardDTO.setWriter(result.get(i).getWriter());
            // boardDTO.setRegistered(result.get(i).getRegisterd());
            // boardDTO.setNo(result.get(i).getWriter() + (i+1));
            //
            // boards.add(boardDTO);

            // [Builder 패턴 이용한 ver]
            BoardDTO board = BoardDTO.builder()
                    .id(result.get(i).getId())
                    .title(result.get(i).getTitle())
                    .content(result.get(i).getContent())
                    .writer(result.get(i).getWriter())
                    .registered(result.get(i).getRegistered())
                    .no(result.get(i).getWriter() + (i+1))
                    .build();

            boards.add(board);
        }

        return boards;
    }

    public void insertBoard(BoardCreateDTO board) {
        boardMapper.insertBoard(board);
    }

    public void updateBoard(int id, BoardCreateDTO board) {
        Board updateBoard = Board.builder()
                .id(id)
                .title(board.getTitle())
                .content(board.getContent())
                .writer(board.getWriter())
                .build();
        boardMapper.updateBoard(updateBoard);
    }

    public void deleteBoard(int id) {
        boardMapper.deleteBoard(id);
    }
}
