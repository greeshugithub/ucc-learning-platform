import { Routes } from '@angular/router';
import { UccchatbotComponent } from './uccchatbot/uccchatbot.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseDetailsComponent } from './course-details/course-details.component';

export const routes: Routes = [
    {
    path: '',
    component: UccchatbotComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'course',
    component:CoursesComponent
  },
   {
    path:'course-details/:id',
    component:CourseDetailsComponent
  },
  
];
