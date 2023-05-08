package practice.mybatiscrud.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import practice.mybatiscrud.Domain.User;
import practice.mybatiscrud.Dto.UserDTO;
import practice.mybatiscrud.Service.MainService;

import java.util.List;

@Controller
public class MainController {
    private final MainService mainService;

    @Autowired
    public MainController(MainService mainService) {
        this.mainService = mainService;
    }

    @GetMapping("/")
    public String getMain(Model model) {
        List<UserDTO> users = mainService.findUsers();
        model.addAttribute("userList", users);
        return "main";
    }

    @GetMapping("/user")
    public String getUser() {
        return "createEmployee";
    }

    @PostMapping("/user")
    @ResponseBody
    public String createUser(@RequestBody UserDTO userDTO) {
        mainService.createUser(userDTO);
        return "success";
    }

    @PostMapping("/user/search")
    @ResponseBody
    public List<UserDTO> searchUser(@RequestBody UserDTO userDTO) {
        return mainService.findUsers(userDTO);
    }

    @GetMapping("/user/{id}")
    public String goUpdate(@PathVariable int id, Model model) {
        UserDTO user = mainService.findUser(id);
        model.addAttribute("user", user);
        return "updateEmployee";
    }

    @PatchMapping("/user")
    @ResponseBody
    public String updateUser(@RequestBody UserDTO userDTO) {
        mainService.updateUser(userDTO);
        return "success";
    }

    @DeleteMapping("/user/{id}")
    @ResponseBody
    public String deleteUser(@PathVariable int id) {
        mainService.deleteUser(id);
        return "success";
    }

    @GetMapping("/download")
    @ResponseBody
    public ResponseEntity<String> download() {
        List<UserDTO> user = mainService.findUsers();
        HttpHeaders header = new HttpHeaders();
        header.add("Content-Type", "text/csv; charset=MS949");
        header.add("Content-Disposition", "attachment; filename=\""+"employee.csv"+"\"");


        return new ResponseEntity<String>(setContent(user), header, HttpStatus.CREATED);
    }

    private String setContent(List<UserDTO> user) {
        String data = "";
        data += "직원번호, 직급, 이름, 전화번호, 이메일 \n";
        for (int i=0 ; i<user.size() ; i++) {
            data += user.get(i).getId() + ",";
            data += user.get(i).getGrade() + ",";
            data += user.get(i).getName() + ",";
            data += user.get(i).getPhone() + ",";
            data += user.get(i).getEmail() + "\n";
        }
        return data;
    }
}
