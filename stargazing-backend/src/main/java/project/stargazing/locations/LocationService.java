package project.stargazing.locations;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import project.stargazing.model.LocationDetailsDTO;
import project.stargazing.model.NewLocationDTO;
import project.stargazing.model.Location;
import project.stargazing.model.User;
import project.stargazing.login.UserRepository;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class LocationService {

    @Autowired
    private LocationRepository locationRepository;
    @Autowired
    private UserRepository loginRepository;

    public List<LocationDetailsDTO> listLocations (Long userId) {
        // TODO: switch user for userId in Location entity
        Optional<User> user = loginRepository.findById(userId);
        List<Location> locations = locationRepository.findByUserId(user);
        return locations.stream().map(LocationDetailsDTO::new).collect(Collectors.toList());
    }

    public Location insertLocation(NewLocationDTO newLocation) {
        Location location = newLocation.toLocation();
        Optional<User> user = loginRepository.findById(newLocation.getUserId());
        user.ifPresent(location::setUserId);
        locationRepository.save(location);
        return location;
    }

    public LocationDetailsDTO detailLocation(Long locationId, Long userId) {
        User user = loginRepository.getReferenceById(userId);
        Location location = locationRepository.getByIdAndUserId(locationId, user);
        return new LocationDetailsDTO(location);
    }
}
