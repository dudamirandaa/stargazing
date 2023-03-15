package project.stargazing.login;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import project.stargazing.infra.security.JWTdetailsDTO;
import project.stargazing.infra.security.TokenService;
import project.stargazing.model.AuthenticationDTO;
import project.stargazing.model.User;

import javax.validation.Valid;

@RestController
@RequestMapping("/login")
public class AuthenticationController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private TokenService tokenService;

    // TODO: implement sign up

    @PostMapping
    public ResponseEntity logIn(@RequestBody @Valid AuthenticationDTO authenticationDTO) {
        UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(authenticationDTO.getUsername(), authenticationDTO.getPassword());
        Authentication authentication = authenticationManager.authenticate(authenticationToken);
        String jwtToken = tokenService.generateToken((User) authentication.getPrincipal());
        return ResponseEntity.ok(new JWTdetailsDTO(jwtToken));
    }
}
