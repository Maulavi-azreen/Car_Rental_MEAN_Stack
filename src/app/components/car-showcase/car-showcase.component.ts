import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component , OnInit} from '@angular/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-car-showcase',
  imports: [CommonModule],
  templateUrl: './car-showcase.component.html',
  styleUrl: './car-showcase.component.css'
})
export class CarShowcaseComponent implements OnInit{
  cars: any[] = [];
  selectedCar: any = {};  // Will store the selected car data

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Load the car data from the JSON file
    this.getCarModels().subscribe((data: any) => {
      console.log('Fetched Cars:', data);
      this.cars = data.cars;
      // Set default selected car (Mercedes 35) on component initialization
      this.selectedCar = this.cars.find(car => car.id === 'mercedes_35');  // Default to the first car
    });
  }

  getCarModels(): Observable<any> {
    return this.http.get<any>('assets/cars.json');  // Adjust path if necessary
  }

  selectCar(carId: string): void {
    this.selectedCar = this.cars.find(car => car.id === carId);
  }
}
