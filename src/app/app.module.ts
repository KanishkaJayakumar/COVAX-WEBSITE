import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './authent/login/login.component';
import { SignupComponent } from './authent/signup/signup.component';
import { AdmindashboardComponent } from './pages/admindashboard/admindashboard.component';
import { BookingpageComponent } from './pages/bookingpage/bookingpage.component';
import { HttpClientModule } from '@angular/common/http';
import { BookingService } from './booking.service';
import { UserpageComponent } from './pages/userpage/userpage.component';
import { AddcenterpageComponent } from './pages/addcenterpage/addcenterpage.component';
import { ScheduleComponent } from './pages/schedule/schedule.component';
import { AdloginComponent } from './authent/adlogin/adlogin.component';
import { AdsignupComponent } from './authent/adsignup/adsignup.component';
import { AboutComponent } from './pages/about/about.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    AdmindashboardComponent,
    UserpageComponent,
    BookingpageComponent,
    AddcenterpageComponent,
    ScheduleComponent,
    AdloginComponent,
    AdsignupComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule.forRoot(),
    NgbCarouselModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  providers: [BookingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
