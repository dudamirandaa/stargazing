package project.stargazing.model;

import lombok.Data;

import javax.validation.constraints.NotNull;

@Data
public class LocationDetailsDTO {
    @NotNull
    private Long id;
    private String description;
    User userId;

    public LocationDetailsDTO(Long id, String description, User userId) {
        this.id = id;
        this.description = description;
        this.userId = userId;
    }

    public LocationDetailsDTO(Location location) {
        this(location.getId(), location.getDescription(), location.getUserId());
    }
}
