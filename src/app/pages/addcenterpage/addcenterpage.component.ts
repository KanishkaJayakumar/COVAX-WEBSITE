import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ImageService } from '../../image.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-addcenterpage',
  templateUrl: './addcenterpage.component.html',
  styleUrl: './addcenterpage.component.css'
})
export class AddcenterpageComponent implements OnInit {

vaccinecount: any;

adminname: any;
centername: any;
centerlocation: any;
responseMessage: any;
private baseUrl = 'https://covax-website.onrender.com/newcenter';
phonenumber: any;
workinghours : any;
centerimage: any;
  availablecenters: any[]=[];

  constructor(private http:HttpClient, private imageService : ImageService, private route : ActivatedRoute){}


ngOnInit(){
  this.route.queryParams.subscribe(params=>{

    this.centername = params['centername'];
    this.centerlocation = params['centerlocation'];
    this.vaccinecount = params['vaccinecount'];
    this.phonenumber = params['phonenumber'];
    this.workinghours = params['workinghours']
  })
  
}

addcenter() {
  const data = {adminname: this.adminname, centername: this.centername,centerlocation : this.centerlocation, vaccinecount : this.vaccinecount, phonenumber : this.phonenumber,workinghours : this.workinghours, centerimage : this.centerimage};  

  console.log('Sending data to server:', data);

  
  this.http.post(`${this.baseUrl}/addnewcenter`, data)
    .subscribe(
      () => {
        this.responseMessage = 'Vaccine Center added successfully'
        this.adminname = '';
      this.centername = '';
          this.centerlocation = '';
          this.vaccinecount = '';
          this.phonenumber = '';
          this.workinghours = '';
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


