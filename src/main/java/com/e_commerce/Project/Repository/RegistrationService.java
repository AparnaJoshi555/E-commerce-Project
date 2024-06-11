package com.e_commerce.Project.Repository;

public interface RegistrationService {

    boolean validateEmail(String emailId);
    boolean validatePassword(String password);
}
