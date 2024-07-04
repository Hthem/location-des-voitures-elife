package com.locationsvoitures.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name = "cars")
public class Car {
    
            @Id
            @GeneratedValue(strategy = GenerationType.IDENTITY)
            private Long id;

            private String brand;

            private String name;

            private String type;

            private Long price;

            private String description;

            private byte[] image;
}