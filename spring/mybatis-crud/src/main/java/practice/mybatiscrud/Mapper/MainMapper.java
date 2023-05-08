package practice.mybatiscrud.Mapper;

import org.apache.ibatis.annotations.Mapper;
import practice.mybatiscrud.Domain.User;
import practice.mybatiscrud.Dto.UserDTO;

import java.util.List;

@Mapper
public interface MainMapper {
    List<User> findAll();
    List<User> findAll(UserDTO userDTO);
    void insert(User user);
    User findOne(int id);
    void update(UserDTO userDTO);
    void deleteOne(int id);
}
