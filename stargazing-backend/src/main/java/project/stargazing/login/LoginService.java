package project.stargazing.login;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import project.stargazing.NewUserDTO;
import project.stargazing.User;

@Service
public class LoginService {

    @Autowired
    private LoginRepository loginRepository;

    public LoginService(LoginRepository loginRepository) {
        this.loginRepository = loginRepository;
    }

    public Long insertUser(NewUserDTO newUser) {
        User user = newUser.toUser();
        if (loginRepository.findByUsername(user.getUsername()).isPresent()) {
            return null;
        }
        user.setEnabled(true);
        loginRepository.save(user);
        return user.getId();
    }

    public User getUser(String username, String password) {
        return loginRepository.findByUsernameAndPassword(username, password).orElse(null);
    }
}
