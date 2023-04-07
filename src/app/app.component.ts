import { Component } from '@angular/core';
import { Course } from './models/Course';
import { CourseData } from './intefaces/ICourseDetails';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'schoole';
  globalId:number = 0;
  courses:Course[] = [new Course(++this.globalId, "Test1", "Dejan Aksovic"), new Course(++this.globalId, "Test2", "Omer Sadikovic")]

  handleAdd(event: CourseData) {
    this.courses.push(new Course(++this.globalId, event.title!, event.author!, event.details))
  }
}
