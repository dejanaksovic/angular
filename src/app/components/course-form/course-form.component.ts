import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CourseValidator } from './course.validators';
import { CourseData } from 'src/app/intefaces/ICourseDetails';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent {

  courseForm = new FormGroup({
    title: new FormControl('', [Validators.minLength(5), Validators.maxLength(12), Validators.required]),
    details: new FormControl('', [Validators.maxLength(200),]),
    author: new FormControl('', [Validators.required, CourseValidator.hasTwoWord])
  })

  @Output() addEvent = new EventEmitter<CourseData>();

  get Title() {
    return this.courseForm.get('title')
  }

  get Details() {
    return this.courseForm.get('details')
  }

  get Author() {
    return this.courseForm.get('author')
  }

  get Errors():string | null {
    let allErrors:string = "";
    if (!this.Title?.errors)
      return null

    const titleErorrs = this.Title?.errors

    if(titleErorrs?.["minlength"]) {
      allErrors += `Title field requires ${titleErorrs?.["minlength"].requiredLength - titleErorrs?.["minlength"].actualLength} more characters`
      return allErrors
    }

    return null
  }

  addCourse() {
    if(this.Errors)
    return
    
    
    this.addEvent.emit({
      title: this.Title?.value as string,
      author: this.Author?.value as string,
      details: this.Details?.value as string })

    this.courseForm.reset()
  }

  seeObject() {
    console.log(this.Title?.errors)
  }
}
