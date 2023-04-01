import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Course } from 'src/app/models/Course';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent {
  @Input() course?:Course;
  @Output() deleteCourse = new EventEmitter<number>()
  @Output() changeCourseTitle = new EventEmitter<number>()

  onDelete() {
    const id = this.course?.id
    this.deleteCourse.emit(id)
  }

  onChangeTitle() {
    this.changeCourseTitle.emit(this.course?.id)
  }

}
