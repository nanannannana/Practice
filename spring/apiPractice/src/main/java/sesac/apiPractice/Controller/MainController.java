package sesac.apiPractice.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import sesac.apiPractice.Domain.User;
import sesac.apiPractice.Dto.UserDTO;
import sesac.apiPractice.Service.MainService;

import java.util.ArrayList;

@Controller
public class MainController {

    @Autowired
    MainService mainService;

//    첫 화면(READ)
    @GetMapping("/")
    public String getUsers(Model model) {
        ArrayList<UserDTO> userList = (ArrayList<UserDTO>) mainService.getUserList();
        model.addAttribute("list",userList);
        return "user";
    }

//    사용자 추가(INSERT)
    @PostMapping("/users")
    @ResponseBody
    public String postUsers(@RequestBody UserDTO userDTO) {
        User user = new User();
        user.setName(userDTO.getName());
        user.setNickname(userDTO.getNickname());
        mainService.insertUser(user);
        return "success";
    }

//    사용자 삭제(DELETE)
    @DeleteMapping("/users")
    @ResponseBody
    public String delUser(@RequestBody UserDTO userDTO) {
        User user = new User();
        user.setId(userDTO.getId());
        mainService.delUser(user);
        return "success";
    }

//    사용자 수정(UPDATE)
    @PostMapping("/user")
    public String Users(UserDTO userDTO, Model model) {
        UserDTO user = mainService.selectUser(userDTO);
        model.addAttribute("user", user);
        return "update";
    }

    @PatchMapping("/users")
    @ResponseBody
    public String patchUser(@RequestBody UserDTO userDTO) {
        User user = new User();
        user.setId(userDTO.getId());
        user.setName(userDTO.getName());
        user.setNickname(userDTO.getNickname());
        mainService.updateUser(user);
        return "success";
    }
}
