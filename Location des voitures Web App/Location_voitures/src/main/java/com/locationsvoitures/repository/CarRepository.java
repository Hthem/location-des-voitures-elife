package com.locationsvoitures.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.locationsvoitures.entity.Car;

@Repository
public interface CarRepository extends JpaRepository<Car, Long>{
    
}