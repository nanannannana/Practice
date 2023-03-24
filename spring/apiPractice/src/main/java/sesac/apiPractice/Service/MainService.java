package sesac.apiPractice.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import sesac.apiPractice.Domain.User;
import sesac.apiPractice.Dto.UserDTO;
import sesac.apiPractice.Mapper.MainMapper;

import java.util.ArrayList;
import java.util.List;

@Service
public class MainService {

    @Autowired
    private MainMapper mainMapper;

    public List<UserDTO> getUserList() {
        List<User> result = mainMapper.retrieveAll();
        List<UserDTO> users = new ArrayList<UserDTO>();

        for (int i=0; i<result.size(); i++) {
            UserDTO user = new UserDTO();
            user.setId(result.get(i).getId());
            user.setName(result.get(i).getName());
            user.setNickname(result.get(i).getNickname());
            user.setNo(i+1);

            users.add(user);
        }
        return users;
    }

    public void insertUser(User user) {mainMapper.insertUser(user);}

    public void delUser(User user) {mainMapper.delUser(user);}

    public UserDTO selectUser(UserDTO userDTO) {
        User user = mainMapper.selectUser(userDTO.getId());
        UserDTO user_info = new UserDTO();
        user_info.setNo(user.getId());
        user_info.setId(user.getId());
        user_info.setName(user.getName());
        user_info.setNickname(user.getNickname());
        return user_info;
    }

    public void updateUser(User user) {mainMapper.updateUser(user);}
}
