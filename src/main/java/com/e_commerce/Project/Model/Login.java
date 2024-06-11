package com.e_commerce.Project.Model;

import lombok.Data;
import org.hibernate.annotations.Immutable;

@Immutable
@Data
public class Login{

    private String username;
    private String password;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}