package project.stargazing.model;

import lombok.Data;
import org.hibernate.validator.constraints.Length;

import javax.validation.constraints.NotNull;

@Data
public class LoginRequestDTO {
    @NotNull
    @Length(max = 50)
    private String username;
    @NotNull
    @Length(max = 200)
    private String password;
}
