package practice.spring.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import practice.spring.Dto.BoardDto;
import practice.spring.Service.BoardService;

@Controller()
@RequestMapping("/board")
public class BoardController {
    private final BoardService boardService;

    @Autowired
    private BoardController(BoardService boardService) {
        this.boardService = boardService;
    }

    @GetMapping("/{id}")
    public String boardMain(@PathVariable int id, Model model) {
        BoardDto board = boardService.findBoard(id);
        model.addAttribute("board", board);
        return "board";
    }

    @PostMapping()
    @ResponseBody
    public String addBoard(@RequestBody BoardDto boardDto) {
        boardService.addBoard(boardDto);
        return "success";
    }

    @PatchMapping()
    @ResponseBody
    public String updateBoard(@RequestBody BoardDto boardDto) {
        boardService.updateBoard(boardDto);
        return "success";
    }

    @DeleteMapping()
    @ResponseBody
    public String delBoard(@RequestBody BoardDto boardDto) {
        boardService.delBoard(boardDto.getId());
        return "success";
    }
}
