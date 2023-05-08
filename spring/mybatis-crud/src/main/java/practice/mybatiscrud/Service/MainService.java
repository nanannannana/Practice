package practice.mybatiscrud.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import practice.mybatiscrud.Domain.User;
import practice.mybatiscrud.Dto.UserDTO;
import practice.mybatiscrud.Mapper.MainMapper;

import java.util.List;
import java.util.ArrayList;

@Service
public class MainService {
    public final MainMapper mainMapper;

    @Autowired
    public MainService(MainMapper mainMapper) {
        this.mainMapper = mainMapper;
    }

    public List<UserDTO> findUsers() {
        List<User> userList = mainMapper.findAll();
        List<UserDTO> users = new ArrayList<UserDTO>();

        for (int i=0 ; i<userList.size() ; i++) {
            UserDTO user = new UserDTO();
            user.setNo(i+1);
            user.setId(userList.get(i).getId());
            user.setGrade(userList.get(i).getGrade());
            user.setName(userList.get(i).getName());
            user.setEmail(userList.get(i).getEmail());
            user.setPhone(userList.get(i).getPhone());
            users.add(user);
        }

        return users;
    }
    public List<UserDTO> findUsers(UserDTO userDTO) {
        List<User> userList = mainMapper.findAll(userDTO);
        List<UserDTO> users = new ArrayList<UserDTO>();

        for (int i=0 ; i<userList.size() ; i++) {
            UserDTO user = new UserDTO();
            user.setNo(i+1);
            user.setId(userList.get(i).getId());
            user.setGrade(userList.get(i).getGrade());
            user.setName(userList.get(i).getName());
            user.setEmail(userList.get(i).getEmail());
            user.setPhone(userList.get(i).getPhone());
            users.add(user);
        }

        return users;
    }

    public void createUser(UserDTO userDTO) {
        User user = new User();
        user.setId(userDTO.getId());
        user.setName(userDTO.getName());
        user.setGrade(userDTO.getGrade());
        user.setPhone(userDTO.getPhone());
        user.setEmail(userDTO.getEmail());

        mainMapper.insert(user);
    }

    public UserDTO findUser(int id) {
        User user = mainMapper.findOne(id);
        UserDTO userInfo = new UserDTO();
        userInfo.setId(user.getId());
        userInfo.setName(user.getName());
        userInfo.setGrade(user.getGrade());
        userInfo.setPhone(user.getPhone());
        userInfo.setEmail(user.getEmail());

        return userInfo;
    }

    public void updateUser(UserDTO userDTO) {
        mainMapper.update(userDTO);
    }

    public void deleteUser(int id) {
        mainMapper.deleteOne(id);
    }
}
