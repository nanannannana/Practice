package sesac.apiPractice.Service;

import org.springframework.beans.factory.annotation.Autowired;
import sesac.apiPractice.Domain.User;
import sesac.apiPractice.Dto.UserDTO;
import sesac.apiPractice.Mapper.MainMapper;

import java.util.ArrayList;
import java.util.List;

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
}
