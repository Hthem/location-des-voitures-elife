package com.locationsvoitures.dto;

import org.springframework.web.multipart.MultipartFile;

import jakarta.persistence.Column;
import lombok.Data;

@Data
public class CarDto {
    private Long id;

    private String brand;

    private String name;

    private String type;

    private Long price;

    private String description;

    private MultipartFile image;
    
    @Column(columnDefinition = "longblob")
    private  byte[] returnedImage;
}