import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {
  constructor(private router: Router) {

  }

  courses = [

    {
      id: 1,
      title: 'Frontend Development',
      description: 'Learn Angular from scratch',
      duration: '3 Months',
      modules: 12
    },

    {
      id: 2,
      title: 'Backend Development',
      description: 'Learn APIs and databases',
      duration: '4 Months',
      modules: 15
    },

    {
      id: 3,
      title: 'DevOps',
      description: 'Learn Git, CI/CD and deployment',
      duration: '2 Months',
      modules: 10
    }

  ];

  openCourse(courseId: number) {

    this.router.navigate(['/course-details', courseId]);

  }


}
