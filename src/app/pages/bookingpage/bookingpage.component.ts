import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CenterService } from '../../center.service';


@Component({
  selector: 'app-bookingpage',
  templateUrl: './bookingpage.component.html',
  styleUrl: './bookingpage.component.css'
})
export class BookingpageComponent implements OnInit{

  name: string = '';
  centername: string = '';
  centerlocation: string='';
  bookdate : any;
  responseMessage: string = '';
  bookedSlots: any[] = [];

  centerName: string='';
centerLocation: string='';

  private baseUrl = 'http://localhost:8080/bookslot'; // Replace with your actual backend API URL
  errorMessage: string='';
selectedCenter: any;
  AvailableSlots: any[]=[];

  constructor(private http: HttpClient, private route : ActivatedRoute, private router : Router, private centerService : CenterService) {}

  ngOnInit() {
    // Retrieve query parameters and pre-fill form fields
    this.route.queryParams.subscribe(params => {
      this.centername = params['centername'];
      this.centerlocation = params['centerlocation'];
    });
  }
  



  bookSlot() {
    const data = { name: this.name, centername: this.centername,centerlocation : this.centerlocation, bookdate : this.bookdate }; 

    console.log('Sending data to server:', data);

    
    this.http.post(`${this.baseUrl}/myslotbook`, data)
      .subscribe(
        () => this.responseMessage = 'Slot booked successfully',
       
        (        error: { error: { message: string; }; }) => this.responseMessage = error.error.message || 'Failed to book slot'
      );
  
}


  fetchBookedSlots() {
    this.http.get<any[]>(`${this.baseUrl}/myslots`) // Assuming you have an endpoint for fetching booked slots
      .subscribe(
        (data) => {
          this.bookedSlots = data;
        },
        (error) => {
          console.error('Error fetching booked slots:', error);
        }
      );
  }

  fetchAvailableSlots() {
    this.http.get<any[]>(`${this.baseUrl}/centers`) // Assuming you have an endpoint for fetching booked slots
      .subscribe(
        (data) => {
          this.AvailableSlots = data;
        },
        (error) => {
          console.error('Error fetching Available slots:', error);
        }
      );
  }
}







