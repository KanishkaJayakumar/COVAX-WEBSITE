import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;
  apiUrl = 'http://localhost:8080/appuser'; 
  loginError: string | undefined;
  emailExistsError: string | undefined;
registrationSuccessMessage: any;
loginSuccessMessage: any;



  constructor(private fb: FormBuilder, private http: HttpClient, private router : Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  // bookingErrorMessage = "Login to book your slot!"

  onSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      const body = { email, password };

      // Make a POST request to the login API
      this.http.post(`${this.apiUrl}/login`, body).subscribe(
        (response) => {
          console.log('Login successful:', response);
          this.loginSuccessMessage = "Login Successful";
       
          localStorage.setItem('loggedIn', 'true');
          // Handle successful login, e.g., redirect to a new page
        },
        (error: HttpErrorResponse) => {
          console.error('Login failed:', error);

          if (error.status === 401) {
            // Unauthorized: Invalid credentials
            this.loginError = error.error.message || 'Invalid credentials';
          } else {
            // Other server errors
            this.loginError = 'An error occurred while logging in.';
          }
        }
      );
    }
  }


  logout(): void {
    // Clear authentication state
    localStorage.removeItem('loggedIn');
    
    // Redirect to login page
    this.router.navigate(['/login']);
  }


 isLoggedIn: boolean = localStorage.getItem('loggedIn') === 'true';
 

 gotoBookingPage(): void {
  this.isLoggedIn = localStorage.getItem('loggedIn')==='true';
  if (this.isLoggedIn) {
    this.router.navigate(['/booking']);
  } else {
    window.alert('Please login to book your slot');
  }
}

}


