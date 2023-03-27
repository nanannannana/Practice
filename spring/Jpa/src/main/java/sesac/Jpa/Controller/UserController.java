package sesac.Jpa.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import sesac.Jpa.Domain.UserEntity;
import sesac.Jpa.Dto.UserDTO;
import sesac.Jpa.Service.UserService;

import java.util.ArrayList;

@Controller
public class UserController {

    @Autowired
    UserService userService;

    // 1. READ
    @GetMapping("/")
    public String getUsers(Model model) {
        ArrayList<UserDTO> userList = (ArrayList<UserDTO>) userService.getUserList();
        model.addAttribute("list", userList);
        return "user";
    }
    @GetMapping("/users")
    public String searchUsers(@RequestParam String name, Model model) {
        ArrayList<UserDTO> userList = (ArrayList<UserDTO>) userService.searchUsers(name);
        model.addAttribute("list", userList);
        return "search";
    }

    // 2. CREATE
    @PostMapping("/users")
    @ResponseBody
    public String insertUsers(@RequestBody UserDTO userDTO) {
        UserEntity user = new UserEntity();
        user.setName(userDTO.getName());
        user.setNickname(userDTO.getNickname());
        userService.insertUser(user);
        return "success";
    }

    // 3. UPDATE
    @PostMapping("/user")
    public String User(UserDTO userDTO, Model model) {
        UserDTO user = userService.selectUser(userDTO);
        model.addAttribute("user", user);
        return "update";
    }
    @PutMapping("/users")
    @ResponseBody
    public String updateUser(@RequestBody UserDTO userDTO) {
        UserEntity user = new UserEntity();
        user.setId(userDTO.getId());
        user.setName(userDTO.getName());
        user.setNickname(userDTO.getNickname());
        userService.updateUser(user);
        return "success";
    }

    // 4. Delete
    @DeleteMapping("/users")
    @ResponseBody
    public String deleteUser(@RequestBody UserDTO userDTO) {
        UserEntity user = new UserEntity();
        user.setId(userDTO.getId());
        userService.deleteUser(user.getId());
        return "success";
    }
}
