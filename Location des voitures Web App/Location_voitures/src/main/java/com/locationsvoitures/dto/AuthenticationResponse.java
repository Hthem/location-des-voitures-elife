package com.locationsvoitures.dto;

import com.locationsvoitures.enums.UserRole;

import lombok.Data;

@Data
public class AuthenticationResponse {

            private String jwt;

            private UserRole userRole;

            private Long userId;

}