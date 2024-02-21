import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { ImageService } from '../../image.service';


@Component({
  selector: 'app-addcenterpage',
  templateUrl: './addcenterpage.component.html',
  styleUrl: './addcenterpage.component.css'
})
export class AddcenterpageComponent {

vaccinecount: any;

name: any;
centername: any;
centerlocation: any;
responseMessage: any;
private baseUrl = 'http://localhost:8080/newcenter';
phonenumber: any;
workinghours : any;
centerimage: any;
  availablecenters: any[]=[];


constructor(private http:HttpClient, private imageService : ImageService){}

addcenter() {
  const data = {centername: this.centername,centerlocation : this.centerlocation, vaccinecount : this.vaccinecount, phonenumber : this.phonenumber,workinghours : this.workinghours, centerimage : this.centerimage};  

  console.log('Sending data to server:', data);

  
  this.http.post(`${this.baseUrl}/addnewcenter`, data)
    .subscribe(
      () => {
        this.responseMessage = 'Vaccine Center added successfully'
      // this.centername = '';
          // this.centerlocation = '';
          // this.vaccinecount = '';
          // this.phonenumber = '';
          // this.workinghours = '';
      },
      (        error: { error: { message: string; }; }) => this.responseMessage = error.error.message || 'Failed to add center'
    );
}


fetchVaccineCenters() {
  this.http.get<any[]>(`${this.baseUrl}/mycenters`) // Assuming you have an endpoint for fetching booked slots
    .subscribe(
      (data) => {
        this.availablecenters = data;
      },
      (error) => {
        console.error('Error fetching booked slots:', error);
      }
    );
}


}


