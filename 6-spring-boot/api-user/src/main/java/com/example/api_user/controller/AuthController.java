package com.example.api_user.controller;

import ch.qos.logback.core.net.SMTPAppenderBase;
import com.example.api_user.dto.LoginDTO;
import com.example.api_user.security.JwtTokenProvider;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthController {
    private final AuthenticationManager authenticationManager;
    private final JwtTokenProvider jwtTokenProvider;
    private final UserDetailsService userDetailsService;

    public AuthController(AuthenticationManager authenticationManager, JwtTokenProvider jwtTokenProvider, UserDetailsService userDetailsService) {
        this.authenticationManager = authenticationManager;
        this.jwtTokenProvider = jwtTokenProvider;
        this.userDetailsService = userDetailsService;
    }

    @PostMapping("/login")
    public String Login(@RequestBody LoginDTO loginDTO){
        try {
            String username = loginDTO.getUsername();
            String password = loginDTO.getPassword();
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(username, password)
            );

            UserDetails user = (UserDetails) authentication.getPrincipal();
            return jwtTokenProvider.generateToken(user);
        } catch (AuthenticationException error) {
            throw new RuntimeException("Invalid Credentials");
        }
    }
}
