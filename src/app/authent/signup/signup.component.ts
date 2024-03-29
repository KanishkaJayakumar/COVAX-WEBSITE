import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  registerForm: FormGroup;
emailExistsError: string |null=null;
  registrationSuccessMessage: string | null=null;


  

  constructor(private fb: FormBuilder,private http: HttpClient) {
    this.registerForm = this.fb.group({
      name:['',[Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }


  onSubmit() {
    console.log('Form Value:', this.registerForm.value);
  console.log('Is Form Valid:', this.registerForm.valid);
    if (this.registerForm.valid) {
      const { name,email, password } = this.registerForm.value;
      
      // Send registration data to the backend
      this.http.post('https://covax-website.onrender.com/appuser/signup', { name,email, password })
        .subscribe(
          (response: any) => {
            console.log('Registration successful:', response);
            // Handle successful registration, e.g., redirect to login page
            this.handleRegistrationSuccess();
            localStorage.setItem('registered', 'true');
          },
          (error: any) => {
            if (error.status === 409) {
              // Handle email already exists error
              this.handleEmailExistsError(error.error.message);
            }
            else{
            console.error('Registration failed:', error);
            // Handle registration failure, e.g., show error message
          }
    });
    } else {
      console.log('Form is not valid. Cannot submit.');
    }
  }



  private handleEmailExistsError(errorMessage: string): void {

    this.emailExistsError = errorMessage;
  }

  private handleRegistrationSuccess():void{
    this.registrationSuccessMessage="Registration Successful";
    localStorage.setItem('registered', 'true');
  }

}




