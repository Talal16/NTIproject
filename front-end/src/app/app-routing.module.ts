import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/user/login/login.component';
import { ProfileComponent } from './pages/user/profile/profile.component';
import { RegisterComponent } from './pages/user/register/register.component';
import { AllCourseComponent } from './pages/user/all-course/all-course.component';
import { EditComponent } from './pages/user/edit/edit.component';
import { HomeComponent } from './pages/user/home/home.component';

const routes: Routes = [
 
  {path:"register", component:RegisterComponent},
  {path:"profile" , component:ProfileComponent},
  {path:"", component:LoginComponent},
  {path:"allCourses", component: AllCourseComponent},
  {path:"edit", component: EditComponent},
  {path:"home", component: HomeComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
