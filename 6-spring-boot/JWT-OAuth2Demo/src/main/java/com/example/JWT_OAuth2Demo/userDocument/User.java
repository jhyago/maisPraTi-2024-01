package com.example.JWT_OAuth2Demo.userDocument;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.Collections;

@Document
@Data
@RequiredArgsConstructor
@NoArgsConstructor
public class User implements UserDetails {
    @Id
    private String id;

    @NonNull
    private String username;

    @NonNull
    private String password;

    public Collection<? extends GrantedAuthority> getAuthorities() {
        return Collections.emptyList();
    }

    public boolean isAccountNonExpired() {
        return true;
    }

    public boolean isAccountNonLocked() {
        return true;
    }

    public boolean isCredentialsNonExpired() {
        return true;
    }

    public boolean isEnabled() {
        return true;
    }

    @Override
    public String getUsername() {
        return this.username;
    }
}
