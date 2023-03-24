package sesac.apiPractice.Mapper;

import org.apache.ibatis.annotations.Mapper;
import sesac.apiPractice.Domain.User;

import java.util.List;

@Mapper
public interface MainMapper {
    List<User> retrieveAll();

    void insertUser(User user);

    void delUser(User user);

    User selectUser(int id);

    void updateUser(User user);
}
