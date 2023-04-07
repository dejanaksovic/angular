import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Course } from 'src/app/models/Course';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent {
  @Input() course?:Course;
  @Output() deleteEvent = new EventEmitter<number>()

  deleteCourse() {
    console.log("Event emmitted");
    this.deleteEvent.emit(this.course?.id)
  }
}
