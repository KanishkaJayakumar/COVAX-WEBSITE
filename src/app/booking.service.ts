// booking.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  private baseUrl = 'http://localhost:8080/bookslot'; // Replace with your actual Node.js server URL

  constructor(private http: HttpClient) { }

  getBookedSlots(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/myslots`);
  }
}
