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
  @Output() selectEvent = new EventEmitter<number>()

  deleteCourse() {
    this.deleteEvent.emit(this.course?.id)
  }

  selectCourse() {
    this.selectEvent.emit(this.course?.id)
  }
}
