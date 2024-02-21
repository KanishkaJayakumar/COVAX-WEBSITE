import { Component } from '@angular/core';
import { CenterService } from '../../center.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrl: './admindashboard.component.css'
})
export class AdmindashboardComponent {
  availablecenters: any[] = [];
  responseMessage: string='';
  baseUrl: string = 'https://localhost:8080/newcenter';

  constructor(private centerService: CenterService, private router : Router, private http : HttpClient) { }

  ngOnInit(): void {
    this.centerService.getAllCenters().subscribe(
      (data: any[]) => {
        console.log("fetching centers", data);
        this.availablecenters = data;

      },
      (error) => {
        console.error("Error fetching vaccine centers", error);

      }
      );


  }

  // data = [
  //   { sno: 1, date: '2022-01-10',username:'user1', place: 'City A', centre: 'Centre 1' },
  //   { sno: 2, date: '2022-01-15',username:'user2', place: 'City B', centre: 'Centre 2' },
  //   { sno: 3, date: '2022-01-20',username:'user3', place: 'City C', centre: 'Centre 3' },
  //   { sno: 4, date: '2022-01-25',username:'user4', place: 'City A', centre: 'Centre 4' },
  //   // Add more records as needed
  // ];
  logout(): void {
    // Clear authentication state
    localStorage.removeItem('loggedIn');
    
    // Redirect to login page
    this.router.navigate(['/adlogin']);
  }

  editCenter(center: any) {
    // Navigate to the add center form page with the center details
    this.router.navigate(['/addcenter'], { state: { center } });
}

// Method to handle deleting a center
deleteCenter(centerId: number) {
  if (confirm('Are you sure you want to delete this center?')) {
    this.http.delete(`${this.baseUrl}/centers/${centerId}`).subscribe(
      () => {
        this.responseMessage = 'Vaccine Center deleted successfully';
        // Optionally, you can update your UI or perform any additional actions here.
      },
      (error) => {
        console.error("Error deleting center", error);
        this.responseMessage = 'Failed to delete center';
      }
    );
  }
}
}
