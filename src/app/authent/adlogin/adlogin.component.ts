import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adlogin',
  templateUrl: './adlogin.component.html',
  styleUrl: './adlogin.component.css'
})
export class AdloginComponent {
  loginForm: FormGroup;
  apiUrl = 'http://localhost:8080/appadmin/adlogin'; 
  loginError: string | undefined;
  emailExistsError: string | undefined;
registrationSuccessMessage: any;
loginSuccessMessage: any;

  constructor(private fb: FormBuilder, private http: HttpClient, private router : Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      adminid :['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { email, password, adminid} = this.loginForm.value;
      const body = { email, password, adminid };
      console.log(body);
      

      // Make a POST request to the login API
      this.http.post(`${this.apiUrl}`, body).subscribe(
        (response) => {
          console.log('Login successful:', response);
          this.loginSuccessMessage = "Login Successful";
          // Handle successful login, e.g., redirect to a new page

          localStorage.setItem('adloggedIn','true');
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
    localStorage.removeItem('adloggedIn');
    
    // Redirect to login page
    this.router.navigate(['/adlogin']);
  }


 isadLoggedIn: boolean = localStorage.getItem('adloggedIn') === 'true';

 gotoAdminPage(): void {
  this.isadLoggedIn = localStorage.getItem('adloggedIn')==='true';
  if (this.isadLoggedIn) {
    this.router.navigate(['/admin']);
  } else {
    window.alert('Please login to add your center!');
  }
}



}
