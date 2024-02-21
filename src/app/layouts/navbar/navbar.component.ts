import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private router :Router){}
  loggedIn = localStorage.getItem('loggedIn')
  showOptions: boolean = false;
  showsignOptions : boolean = false;

  toggleOptions() {
    this.showOptions = !this.showOptions;
  }

  togglesignOptions(){
    this.showsignOptions = !this.showsignOptions;
  }

  adminLogin() {
    console.log("Admin Login Clicked");
    this.showOptions = false;
    // Add code here to handle admin login
  }

  userLogin() {
    console.log("User Login Clicked");
    this.showOptions = false;
    // Add code here to handle user login
  }

  adminSignUp() {
    console.log("Admin Login Clicked");
    this.showsignOptions = false;
    // Add code here to handle admin login
  }

  userSignUp() {
    console.log("User Login Clicked");
    this.showsignOptions = false;
    // Add code here to handle user login
  }

  logout(): void {
    // Clear authentication state
    localStorage.removeItem('loggedIn');
  }

  adlogout(): void {
    // Clear authentication state
    localStorage.removeItem('adloggedIn');
  }


  isLoggedIn(): boolean {
    return localStorage.getItem('loggedIn') === 'true';

  }

  isadLoggedIn(): boolean {
    return localStorage.getItem('adloggedIn') === 'true';

  }


  closeWindow() {
    this.showOptions=false;
    this.showsignOptions=false; // This will close the current window/tab
  }

  gotoAdminPage(): void {
    this.router.navigate(['/admin']);
  }

  gotoBookingPage():void{
    this.router.navigate(['/user']);
  }
}
  


