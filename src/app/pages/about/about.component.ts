import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  formData = {
    name: '',
    email: '',
    message: ''
  };

  submitForm() {
    console.log('Form submitted:', this.formData);
    // Here you can add logic to send the form data to your backend server
    // For example, you can use HttpClient to make an HTTP POST request
    // to send the form data to your server
    // After sending the form data, you can display a success message to the user
  }


}
