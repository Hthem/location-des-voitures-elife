package com.locationsvoitures.services.auth;

import com.locationsvoitures.dto.SignupRequest;
import com.locationsvoitures.dto.UserDto;

public interface AuthService {
    
    UserDto createCustomer(SignupRequest signupRequest);

    boolean hasCustomerWithEmail(String email);
}