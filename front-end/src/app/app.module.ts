import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{HttpClientModule, HTTP_INTERCEPTORS}from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AuthInterceptor } from './providers/interceptor/auth.interceptor';
import { RegisterComponent } from './pages/user/register/register.component';
import { LoginComponent } from './pages/user/login/login.component';
import { ProfileComponent } from './pages/user/profile/profile.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AllCourseComponent } from './pages/user/all-course/all-course.component';
import { ActivrCourseComponent } from './pages/user/activr-course/activr-course.component';
import { EditComponent } from './pages/user/edit/edit.component';
import { HomeComponent } from './pages/user/home/home.component';
import { CarouselBasicComponent } from './carousel-basic/carousel-basic.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FootorComponent } from './footor/footor.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    NavBarComponent,
    AllCourseComponent,
    ActivrCourseComponent,
    EditComponent,
    HomeComponent,
    CarouselBasicComponent,
    FootorComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule
  ],
  providers: [
   {
    provide:HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi:true
   }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
