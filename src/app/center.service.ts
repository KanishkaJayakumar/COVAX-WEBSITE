import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CenterService {
  private baseUrl = 'http://localhost:8080'; // Update with your backend URL

  constructor(private http: HttpClient) { }

  getAllCenters(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/newcenter/mycenters`);
  }
}
