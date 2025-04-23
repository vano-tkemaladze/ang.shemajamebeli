import { Component, OnInit } from '@angular/core';
import { CarService } from '../services/car.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main',
  imports:[CommonModule],
  templateUrl: './main.component.html',
  standalone:true
})
export class MainComponent implements OnInit {
  cars: any[] = [];

  constructor(private carService: CarService) {}

  ngOnInit() {
    this.loadCars();
  }

  loadCars() {
    this.carService.getAllCars().subscribe(data => {
      this.cars = data;
    });
  }
}
