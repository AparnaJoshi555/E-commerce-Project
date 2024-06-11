package com.e_commerce.Project.Model;

import jakarta.persistence.*;

import lombok.*;
import org.hibernate.annotations.processing.Pattern;

import java.util.List;

@Entity
@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "registerUser")
public class User{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    @Column(name = "first_name")
    private String fname;
    @Column(name = "last_name")
    private String lname;
    @Column(name = "password")

    private String password;

    @Column(name = "username")

    private String username;
    @Column(name = "email")
    private String email;

    public String getPassword() {
        return password;
    }

    @OneToOne(mappedBy = "user", cascade = CascadeType.ALL)
    private List<CartItem> cartItems;
}


