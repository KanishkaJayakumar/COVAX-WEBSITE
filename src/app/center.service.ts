import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CenterService {
  private baseUrl = 'https://covax-website.onrender.com'; // Update with your backend URL

  constructor(private http: HttpClient) { }

  getAllCenters(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/newcenter/mycenters`);
  }
}
