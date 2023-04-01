import { Component, OnInit } from '@angular/core';
import { Course } from "../../models/Course"

@Component({
  selector: 'app-kursevi',
  templateUrl: './kursevi.component.html',
  styleUrls: ['./kursevi.component.css']
})

export class KurseviComponent {
  courses:Course[] = [];
  inputValue:string = ''
  globalId:number = 0;

  get isInputValid() {
    if(this.inputValue === "") {
      return false
    }
    return true
  }

  addCourse():void {
    if(!this.isInputValid)
      return

    this.courses.push(new Course(this.inputValue, ++this.globalId));
    this.inputValue = "";
  }

  handleDelete(id: number):void {
    this.courses = this.courses.filter ( e => e.id !== id )
  }

  handleChange(id: number):void {
    if(!this.isInputValid)
      return
    this.courses.forEach( e => {
      if(e.id === id) {
        e.title = this.inputValue
      }
    })
  }

}
