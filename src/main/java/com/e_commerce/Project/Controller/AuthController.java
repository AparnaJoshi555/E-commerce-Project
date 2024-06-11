package com.e_commerce.Project.Controller;

import com.e_commerce.Project.Model.Login;
import com.e_commerce.Project.Model.User;
import com.e_commerce.Project.Service.UserService;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3001")
@RequestMapping("/authentication")
public class AuthController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<User> RegisterUser(@RequestBody User user){
        return userService.addUser(user);
    }

    @PostMapping("/login")
    public ResponseEntity<Object> LoginUser(@RequestBody Login user){
        return userService.authenticateUser(user);
    }

}