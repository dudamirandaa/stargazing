package project.stargazing;

import org.hibernate.validator.constraints.Length;

import javax.validation.constraints.NotNull;

public class NewUserDTO {

    @NotNull
    @Length(max = 50)
    private String username;
    @NotNull
    @Length(max = 200)
    private String password;

    public void setUsername(String username) {
        this.username = username;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public User toUser() {
        User user = new User();
        user.setUsername(username);
        user.setPassword(password);
        return user;
    }
}
