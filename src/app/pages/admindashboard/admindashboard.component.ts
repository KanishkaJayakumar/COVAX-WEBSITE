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
  baseUrl: string = 'https://covax-website.onrender.com/newcenter';
  adminname: string='';
  centername: any;
  workinghours: any;
  phonenumber: any;
  vaccinecount: any;
  centerlocation: any;

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

  logout(): void {
    localStorage.removeItem('loggedIn');
    
    this.router.navigate(['/adlogin']);
  }

  editCenter(element: any) {
    // Navigate to the add center form page with the center details
    this.router.navigate(['/addcenter'], {
      queryParams : {
        adminname : element.adminname,
        centername : element.centername,
        centerlocation : element.centerlocation,
        vaccinecount : element.vaccinecount,
        phonenumber : element.phonenumber,
        workinghours : element.workinghours
        
      }
     });
}

// Method to handle deleting a center
deleteCenter(id: number) {
  if (confirm('Are you sure you want to delete this center?')) {
    this.http.delete(`${this.baseUrl}/${id}`).subscribe(
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
