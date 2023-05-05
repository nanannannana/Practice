package practice.spring.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import practice.spring.Dto.BoardDto;
import practice.spring.Service.BoardService;

import java.util.ArrayList;
import java.util.List;

@Controller
public class MainController {

    private final BoardService boardService;

    @Autowired
    public MainController(BoardService boardService) {
        this.boardService = boardService;
    }

    @GetMapping("/")
    public String getMain(Model model) {
        List<BoardDto> boards = boardService.findAllBoards();
        model.addAttribute("boardList", boards);
        return "main";
    }
}
