import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './authent/login/login.component';
import { SignupComponent } from './authent/signup/signup.component';
import { AdmindashboardComponent } from './pages/admindashboard/admindashboard.component';
import { UserpageComponent } from './pages/userpage/userpage.component';
import { BookingpageComponent } from './pages/bookingpage/bookingpage.component';
import { AddcenterpageComponent } from './pages/addcenterpage/addcenterpage.component';
import { ScheduleComponent } from './pages/schedule/schedule.component';
import { AdsignupComponent } from './authent/adsignup/adsignup.component';
import { AdloginComponent } from './authent/adlogin/adlogin.component';
import { AuthGuard } from './auth.guard';
import { AboutComponent } from './pages/about/about.component';

const routes: Routes = [
  {path:'header',component:NavbarComponent},
  {path:'footer',component:FooterComponent},
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'admin',component:AdmindashboardComponent},
  {path:'user',component:UserpageComponent},
  {path:'booking',component:BookingpageComponent, canActivate : [AuthGuard]},
  {path:'addcenter',component:AddcenterpageComponent},
  {path:'schedule',component:ScheduleComponent},
  {path:'adsignup',component:AdsignupComponent},
  {path:'adlogin',component:AdloginComponent},
  {path:'about',component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
