package com.locationsvoitures.services.admin;

import java.io.IOException;

import com.locationsvoitures.dto.CarDto;

public interface AdminService {
    
    boolean postCar(CarDto carDto) throws IOException;
}