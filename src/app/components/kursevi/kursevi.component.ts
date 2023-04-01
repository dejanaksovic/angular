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

  get isInputValid():boolean {
    if(this.inputValue === "") {
      return false
    }
    return true
  }

  saveTitlesToStrage():void {
    localStorage.setItem('courses', this.courses.reduce((acc, e):string =>
      acc+=`${e.title},`
      , ""))
  }

  ngOnInit():void {
    const titles: string | null = localStorage.getItem('courses')

    console.log(titles);

    if(!titles)
      return

    titles.split(',').forEach( e => {
      this.courses.push(new Course(e, ++this.globalId))
    })
  }

  addCourse():void {
    if(!this.isInputValid)
      return

    this.courses.push(new Course(this.inputValue, ++this.globalId));
    this.inputValue = "";
    this.saveTitlesToStrage()
  }

  handleDelete(id: number):void {
    this.courses = this.courses.filter ( e => e.id !== id )
    this.saveTitlesToStrage()
  }

  handleChange(id: number):void {
    if(!this.isInputValid)
      return
    this.courses.forEach( e => {
      if(e.id === id) {
        e.title = this.inputValue
      }
    })
    this.saveTitlesToStrage()
  }
}
