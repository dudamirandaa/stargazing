package project.stargazing.locations;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import project.stargazing.Location;
import project.stargazing.NewLocationDTO;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/locations")
public class LocationController {

    @Autowired
    private LocationService locationService;

    @GetMapping("/{userId}")
    public List<Location> getLocations(@PathVariable Long userId) {
        return locationService.listLocations(userId);
    }

    @PostMapping
    public Long insertLocation(@RequestBody NewLocationDTO newLocationDTO) {
        return locationService.insertLocation(newLocationDTO);
    }
}
