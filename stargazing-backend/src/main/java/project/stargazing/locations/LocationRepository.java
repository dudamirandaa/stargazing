package project.stargazing.locations;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import project.stargazing.model.Location;
import project.stargazing.model.User;

import java.util.List;
import java.util.Optional;

@Repository
public interface LocationRepository extends JpaRepository<Location, Long> {
    List<Location> findByUserId(Optional<User> id);

    User findOneByUserId(Long userId);
}