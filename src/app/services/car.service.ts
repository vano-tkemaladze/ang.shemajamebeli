import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private apiUrl = 'http://localhost:5000/api/cars'; // შეცვალე შენი API-ით

  constructor(private http: HttpClient) {}

  getAllCars(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getCarById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  searchCars(filters: any): Observable<any[]> {
    return this.http.post<any[]>(`${this.apiUrl}/search`, filters);
  }
}
