package sesac.Jpa.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import sesac.Jpa.Domain.UserEntity;
import sesac.Jpa.Dto.UserDTO;
import sesac.Jpa.Repository.UserRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    // 1. READ
    public List<UserDTO> getUserList() {
        List<UserEntity> result = userRepository.findAll();
        List<UserDTO> users = new ArrayList<>();

        for(int i=0 ; i < result.size() ; i++) {
            UserDTO user = new UserDTO();
            user.setId(result.get(i).getId());
            user.setName(result.get(i).getName());
            user.setNickname(result.get(i).getNickname());
            user.setNo(i+1);

            users.add(user);
        }
        return users;
    }
    public Object searchUsers(String name) {
        List<UserEntity> result = userRepository.findByName(name);
        List<UserDTO> users = new ArrayList<>();
        try {
            for(int i=0 ; i < result.size() ; i++) {
                UserDTO user = new UserDTO();
                user.setId(result.get(i).getId());
                user.setName(result.get(i).getName());
                user.setNickname(result.get(i).getNickname());
                user.setNo(i+1);

                users.add(user);
            }
        } catch (NullPointerException e) {
            System.out.println("error");
        }
        return users;
    }

    // 2. CREATE
    public void insertUser(UserEntity user) {userRepository.save(user);}

    // 3. UPDATE
    public UserDTO selectUser(UserDTO userDTO) {
        Optional<UserEntity> user = userRepository.findById(userDTO.getId());
        UserDTO user_info = new UserDTO();
        if (user.isPresent()) {
            user_info.setId(user.get().getId());
            user_info.setName(user.get().getName());
            user_info.setNickname(user.get().getNickname());
            user_info.setNo(user.get().getId());
        }
        return user_info;
    }
    public void updateUser(UserEntity user) {userRepository.save(user);}

    // 4. DELETE
    public void deleteUser(int id) { userRepository.deleteById(id);}
}
