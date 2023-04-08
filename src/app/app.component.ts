import { Component, OnInit } from '@angular/core';
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
  courses:Course[] = []

  selectedCourseId: number | null = null

  saveLocally() {
    if(this.courses.length < 1)
      localStorage.removeItem('courses')

    localStorage.setItem('courses', JSON.stringify(this.courses))
  }

  loadlLocal() {
    if(!localStorage.getItem('courses'))
      return

    this.courses = JSON.parse(localStorage.getItem('courses')!)
    this.globalId = this.courses[this.courses.length - 1]?.id || 0
  }

  ngOnInit() {
    this.loadlLocal()
  }

  handleAdd(event: CourseData) {
    this.courses.push(new Course(++this.globalId, event.title!, event.author!, event.details))
    this.saveLocally()
  }

  handleChange(event:CourseData) {

    console.log("Event change recivied");

    if(!this.selectedCourseId)
      return

    let changingCourse:Course | undefined = this.courses.find( e => e.id === this.selectedCourseId );

    if(!changingCourse) {
      this.selectedCourseId = null
      return
    }

    //PLS HELP
    changingCourse.title = event.title ? event.title : changingCourse.title
    changingCourse.author = event.author ? event.author : changingCourse.author
    changingCourse.details = event.details ? event.details : changingCourse.details

    this.selectedCourseId = null
    this.saveLocally()
  }

  handleDelete(id: number) {
    this.courses = this.courses.filter( e => e.id !== id)
    if(id === this.selectedCourseId) {
      this.selectedCourseId = null
    }
    this.saveLocally()
  }

  handleSelect(id: number) {
    this.selectedCourseId = id
  }
}
