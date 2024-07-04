package com.locationsvoitures.services.admin;

import java.io.IOException;

import org.springframework.stereotype.Service;

import com.locationsvoitures.dto.CarDto;
import com.locationsvoitures.entity.Car;
import com.locationsvoitures.repository.CarRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AdminServiceImpl implements AdminService {
    private final CarRepository carRepository;

    @Override
    public boolean postCar(CarDto carDto) throws IOException {
        
        try {   
            Car car = new Car();
            car.setName(carDto.getName());
            car.setBrand(carDto.getBrand());
            car.setPrice(carDto.getPrice());
            car.setType(carDto.getType());
            car.setDescription(carDto.getDescription());
            car.setImage(carDto.getImage().getBytes());
            carRepository.save(car);
            return true;
        } catch (Exception e) {
            return false;
        }
    }
}