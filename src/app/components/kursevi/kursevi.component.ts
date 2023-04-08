import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Course } from "../../models/Course"

@Component({
  selector: 'app-kursevi',
  templateUrl: './kursevi.component.html',
  styleUrls: ['./kursevi.component.css']
})

export class KurseviComponent {

  @Input() courses:Course[] = [];

  @Output() deleteEvent = new EventEmitter<number>()
  @Output() selectEvent = new EventEmitter<number>()

  handleDelete(id:number) {
    this.deleteEvent.emit(id);
  }

  handleSelect(id: number) {
    this.selectEvent.emit(id)
  }

}
