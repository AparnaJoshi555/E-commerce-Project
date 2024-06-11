package com.e_commerce.Project.Service;

import com.e_commerce.Project.Model.Login;
import com.e_commerce.Project.Model.User;
import org.springframework.http.ResponseEntity;

public interface UserService {

    ResponseEntity<User> addUser(User user);
    ResponseEntity<Object> authenticateUser(Login user);
}