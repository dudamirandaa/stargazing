package project.stargazing.model;

import lombok.Data;

@Data
public class LoginResponseDTO {

    private String token;
    private Long userId;

    public LoginResponseDTO(String token, Long userId) {
        this.token = token;
        this.userId = userId;
    }
}
