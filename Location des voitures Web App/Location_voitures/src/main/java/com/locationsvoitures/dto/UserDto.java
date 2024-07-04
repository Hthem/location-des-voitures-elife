package com.locationsvoitures.dto;

import com.locationsvoitures.enums.UserRole;

import lombok.Data;

@Data
public class UserDto {
    
    private long id;

    private String name;

    private String email;
    
    private UserRole userRole;
}