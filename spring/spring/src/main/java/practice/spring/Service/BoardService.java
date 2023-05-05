package practice.spring.Service;

import org.springframework.stereotype.Service;
import practice.spring.Domain.Board;
import practice.spring.Dto.BoardDto;
import practice.spring.Repository.BoardRepository;

import java.util.ArrayList;
import java.util.List;

@Service
public class BoardService {
    private final BoardRepository boardRepository;
    public BoardService(BoardRepository boardRepository) {
        this.boardRepository = boardRepository;
    }
    // Board 배열
    private List<BoardDto> boards = new ArrayList<>();

    // Read
    // 전체 Board
    public List<BoardDto> findAllBoards() {
        return boards;
    }
    // 특정 Board
    public BoardDto findBoard(int id) {
        BoardDto tempBoard = new BoardDto();
        for (BoardDto board: boards) {
            if (board.getId() == id) {
                tempBoard.setId(board.getId());
                tempBoard.setName(board.getName());
                tempBoard.setContent(board.getContent());
            }
        }
        return tempBoard;
    }

    // Create
    public void addBoard(BoardDto boardDto) {
        if (boards.size() == 0) {
            boardDto.setId(0);
            boards.add(boardDto);
        } else {
            boardDto.setId(boards.get(boards.size() - 1).getId() + 1);
            boards.add(boardDto);
        }
    }

    // Update
    public void updateBoard(BoardDto boardDto) {
        for (BoardDto board: boards) {
            if (board.getId() == boardDto.getId()) {
                board.setName(boardDto.getName());
                board.setContent(boardDto.getContent());
            }
        }
    }

    // Delete
    public void delBoard(int id) {
        boards.removeIf(item -> item.getId() == id);
    }
}
