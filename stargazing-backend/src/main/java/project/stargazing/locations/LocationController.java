package project.stargazing.locations;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;
import project.stargazing.model.Location;
import project.stargazing.model.LocationDetailsDTO;
import project.stargazing.model.NewLocationDTO;

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
        List<LocationDetailsDTO> locations = locationService.listLocations(userId).stream().map(LocationDetailsDTO::new).collect(Collectors.toList());
        return ResponseEntity.ok(locations);
    }

    @PostMapping
    public ResponseEntity insertLocation(@RequestBody NewLocationDTO newLocationDTO, UriComponentsBuilder uriComponentsBuilder) {
        Location createdLocation = locationService.insertLocation(newLocationDTO);
        URI uri = uriComponentsBuilder.path("/locations/{id}").buildAndExpand(createdLocation.getId()).toUri();
        return ResponseEntity.created(uri).body(new LocationDetailsDTO(createdLocation));
    }
}
