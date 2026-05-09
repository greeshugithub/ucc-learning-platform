import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-course-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.css'
})
export class CourseDetailsComponent  {
   courseId: string | null = '';

  courseData: any;

  allCourses = [

    {
      id: 1,
      title: 'Frontend Development',
      description: 'Learn Angular deeply',
      modules: [
        'HTML',
        'CSS',
        'JavaScript',
        'Angular'
      ]
    },

    {
      id: 2,
      title: 'Backend Development',
      description: 'Learn APIs and databases',
      modules: [
        'Node.js',
        'Express',
        'MongoDB'
      ]
    },

    {
      id: 3,
      title: 'DevOps',
      description: 'Learn deployment and CI/CD',
      modules: [
        'Git',
        'GitHub',
        'Pipelines',
        'Docker'
      ]
    }

  ];

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit(): void {

 this.courseId = this.route.snapshot.paramMap.get('id');

const courseIdNumber = Number(this.courseId);

this.courseData = this.allCourses.find(
  course => course.id === courseIdNumber
);

  }



}
