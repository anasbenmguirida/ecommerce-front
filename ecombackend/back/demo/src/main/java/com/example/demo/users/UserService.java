package com.example.demo.users;

import java.util.List;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;


@Service
public class UserService {
    private final UserRepository userRepo;

    @Autowired

    public UserService(UserRepository userRepository) {
        this.userRepo = userRepository;
    }

    public List<User> getUserList() {
    return userRepo.findAll();
    }
}