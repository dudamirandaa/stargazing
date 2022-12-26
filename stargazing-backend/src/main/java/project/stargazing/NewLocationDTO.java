package project.stargazing;

import lombok.Data;
import org.hibernate.validator.constraints.Length;

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
