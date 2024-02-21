import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  
  constructor(private http: HttpClient) { }

  uploadImage(image: File) {
    const formData = new FormData();
    formData.append('image', image);
    return this.http.post<any>('http://localhost:8080/upload', formData);
  }

  getImage() {
    return this.http.get<any>('/image');
  }
}
