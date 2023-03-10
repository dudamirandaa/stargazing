package project.stargazing.model;

import lombok.Data;

import javax.validation.constraints.NotNull;

@Data
public class NewLocationDTO {

    @NotNull
    private String description;
    @NotNull
    Long userId;
    public Location toLocation() {
        Location location = new Location();
        location.setDescription(description);
        return location;
    }
}
