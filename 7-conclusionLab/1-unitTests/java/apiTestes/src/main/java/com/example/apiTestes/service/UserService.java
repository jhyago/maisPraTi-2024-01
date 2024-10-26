package com.example.apiTestes.service;

import com.example.apiTestes.model.User;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserService {
    private final List<User> users = new ArrayList<>();

    public List<User> getAllUsers(){
        return users;
    }

    public User getUserById(Long id){
        return users.stream().filter(user -> user.getId().equals(id)).findFirst().orElse(null);
    }

    public User addUser(User user){
        users.add(user);
        return user;
    }
}
