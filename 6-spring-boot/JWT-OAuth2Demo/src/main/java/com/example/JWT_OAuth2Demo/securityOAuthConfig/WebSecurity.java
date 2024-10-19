package com.example.JWT_OAuth2Demo.securityOAuthConfig;

import com.nimbusds.jose.util.KeyUtils;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.oauth2.server.resource.web.BearerTokenAuthenticationEntryPoint;
import org.springframework.security.oauth2.server.resource.web.access.BearerTokenAccessDeniedHandler;
import org.springframework.security.provisioning.UserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableMethodSecurity
@Slf4j
public class WebSecurity {
    @Autowired
    JWTtoUserConverter jwtToUserConverter;

    @Autowired
    KeyUtils keyUtils;

    @Autowired
    PasswordEncoder passwordEncoder;

    @Autowired
    UserDetailsManager userDetailsManager;

    @Bean
    public SecurityFilterChain securityFilterChain (HttpSecurity http) throws Exception {
        http
                .authorizeHttpRequests((authorize) -> authorize.requestMatchers("/api/auth/*").permitAll().anyRequest().authenticated())
                .csrf(csrf -> csrf.disable())
                .cors(cors -> cors.disable())
                .httpBasic(basic -> basic.disable())
                .oauth2ResourceServer((oauth2) -> oauth2.jwt((jwt) -> jwt.jwtAuthenticationConverter(jwtToUserConverter)))
                .sessionManagement((session) -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .exceptionHandling((exceptions) -> exceptions.authenticationEntryPoint(new BearerTokenAuthenticationEntryPoint())
                .accessDeniedHandler(new BearerTokenAccessDeniedHandler()));

        return http.build();
    }
}
