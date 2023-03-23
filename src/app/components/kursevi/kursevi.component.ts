import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kursevi',
  templateUrl: './kursevi.component.html',
  styleUrls: ['./kursevi.component.css']
})
export class KurseviComponent {
  courses:string[] = [];
  isInputValid:boolean = true;

  setLocal() {
    localStorage.setItem("courses", this.courses.reduce((acc, e) => {
      return acc += `${e},`
    }, ''))
  }

  //Mount lifecycle hook
  ngOnInit() {
    localStorage.getItem('courses')?.split(',').forEach( e => {
      if(e)
      this.courses.push(e)
    })
  }

  addCourse(courseNameInput:HTMLInputElement) {
    if(!courseNameInput.value) {
      this.isInputValid = false;
      return
    }
    this.courses.push(courseNameInput.value);
    courseNameInput.value = "";
    this.setLocal();
  }

  deleteSelf(course: string) {
    this.courses = this.courses.filter( e => course !== e);
    this.setLocal();
  }
}
