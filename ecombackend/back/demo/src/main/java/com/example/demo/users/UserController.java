package com.example.demo.users;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController
public class UserController {

    @GetMapping("/hello") 
    public String sayhey(){
        return "Hello World";
    }
}

