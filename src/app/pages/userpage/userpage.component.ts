import { ChangeDetectorRef,
   Component, OnInit } from '@angular/core';
import { BookingService } from '../../booking.service';
import { HttpClient } from '@angular/common/http';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrl: './userpage.component.css'
})
export class UserpageComponent implements OnInit {
onLogOut() {
throw new Error('Method not implemented.');
}
  bookedSlots: any[] = [];
  

  constructor(private bookingService: BookingService, private cdr : ChangeDetectorRef, private router : Router) { }

  ngOnInit(): void {
    this.bookingService.getBookedSlots().subscribe(
    (data: any[]) => {
      console.log('Fetched bookings:', data); 
      this.bookedSlots = data;
      this.cdr.detectChanges();
    },
    (error) => {
      console.error('Error fetching booked slots:', error);
    }
  );
  }

  logout(){
    // Clear authentication state
    localStorage.removeItem('loggedIn');
    
    // Redirect to login page
    this.router.navigate(['/login']);
  }
}