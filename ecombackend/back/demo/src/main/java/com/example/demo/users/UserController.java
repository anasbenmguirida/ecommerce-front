package com.example.demo.users;

import org.hibernate.mapping.List;
import org.springframework.web.bind.annotation.*;

@RestController
public class UserController {
private final UserService us ; 
    @Autowired
    public UserController(UserService us){
        this.us=us ; 
    }

    @GetMapping("/") 
    public String sayhey(){
        return "Hello World";
    }
    @GetMapping("/users")
    public List <User> getUsers(){
        return us.getUserLists() ; 
    }
}

