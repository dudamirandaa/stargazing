package project.stargazing.model;

import lombok.Data;
import org.hibernate.validator.constraints.Length;

import javax.validation.constraints.NotNull;

@Data
public class LoginResponseDTO {

    private String token;
    private Long userId;

    public LoginResponseDTO(String token, Long userId) {
        this.token = token;
        this.userId = userId;
    }
}
