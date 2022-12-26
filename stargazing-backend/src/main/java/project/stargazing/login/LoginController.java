package project.stargazing.login;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import project.stargazing.LoginResponseDTO;
import project.stargazing.NewUserDTO;
import project.stargazing.User;

import javax.validation.Valid;
import java.util.UUID;

@RestController
@RequestMapping()
public class LoginController {

    @Autowired
    private LoginService loginService;

    @PostMapping("signup")
    public LoginResponseDTO signUp(@RequestBody @Valid NewUserDTO newUserDTO) {
        String token = "";
        Long userId = loginService.insertUser(newUserDTO);
        if(userId != null) {
            token = UUID.randomUUID().toString();
        }
        return new LoginResponseDTO(token, userId);
    }

    @PostMapping("/login")
    public LoginResponseDTO login(@RequestBody @Valid LoginRequestDTO loginRequestDTO) {
        String token = "";
        User user = loginService.getUser(loginRequestDTO.getUsername(), loginRequestDTO.getPassword());
        if(user != null) {
            token = UUID.randomUUID().toString();
        }
        System.out.println(user.getId());
        return new LoginResponseDTO(token, user.getId());
    }
}
