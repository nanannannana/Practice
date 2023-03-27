package sesac.Jpa.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import sesac.Jpa.Domain.UserEntity;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, Integer> {
    List<UserEntity> findByName(String name);
}
