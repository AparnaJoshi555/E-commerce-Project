package com.e_commerce.Project.Service;

import com.e_commerce.Project.Model.Login;
import com.e_commerce.Project.Model.User;
import com.e_commerce.Project.Repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;


@Service
public class RegistrationServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;
    @Override
    public ResponseEntity<User> addUser(User user) {
        //user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        userRepository.save(user);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }
//
//    @Override
//    public ResponseEntity<Login> authenticateUser(Login user) {
//        User dbUser = userRepository.findByUsername(user.getUsername()).get();
//        if(dbUser.getPassword().equals(user.getPassword())){
//            return new ResponseEntity<>(HttpStatus.ACCEPTED);
//        }
//        else return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
//    }
    @Override
    public ResponseEntity<Object> authenticateUser(Login user){
        Optional<User> dbUser= userRepository.findByUsernameAndPassword(user.getUsername(),user.getPassword());
      if(dbUser.isPresent()){
          return ResponseEntity.ok(dbUser);
      }
      else{
          return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid username or password");
      }

    }
}
