package project.stargazing.locations;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import project.stargazing.model.NewLocationDTO;
import project.stargazing.model.Location;
import project.stargazing.model.User;
import project.stargazing.login.LoginRepository;

import java.util.List;
import java.util.Optional;

@Service
public class LocationService {

    @Autowired
    private LocationRepository locationRepository;
    @Autowired
    private LoginRepository loginRepository;

    public List<Location> listLocations(Long userId) {
        // TODO: switch user for userId in Location entity
        Optional<User> user = loginRepository.findById(userId);
        return locationRepository.findByUserId(user);
    }

    public Location insertLocation(NewLocationDTO newLocation) {
        Location location = newLocation.toLocation();
        Optional<User> user = loginRepository.findById(newLocation.getUserId());
        user.ifPresent(location::setUserId);
        locationRepository.save(location);
        return location;
    }
}
