package project.stargazing.locations;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;
import project.stargazing.model.Location;
import project.stargazing.model.LocationDetailsDTO;
import project.stargazing.model.NewLocationDTO;

import javax.transaction.Transactional;
import java.net.URI;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/locations")
public class LocationController {

    @Autowired
    private LocationService locationService;

    @GetMapping("/{userId}")
    public ResponseEntity<List<LocationDetailsDTO>> getLocations(@PathVariable Long userId) {
        return ResponseEntity.ok(locationService.listLocations(userId));
    }

    @PostMapping
    public ResponseEntity insertLocation(@RequestBody NewLocationDTO newLocationDTO, UriComponentsBuilder uriComponentsBuilder) {
        Location createdLocation = locationService.insertLocation(newLocationDTO);
        URI uri = uriComponentsBuilder.path("/locations/{id}").buildAndExpand(createdLocation.getId()).toUri();
        return ResponseEntity.created(uri).body(new LocationDetailsDTO(createdLocation));
    }

    // TODO: create delete, update and detail methods

    @GetMapping("/{locationId}/{userId}")
    public ResponseEntity<LocationDetailsDTO> detailLocation(@PathVariable Long locationId, @PathVariable Long userId) {
        return ResponseEntity.ok(locationService.detailLocation(locationId, userId));
    }
}
