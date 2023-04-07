import { Component, Input, OnInit } from '@angular/core';
import { Course } from "../../models/Course"

@Component({
  selector: 'app-kursevi',
  templateUrl: './kursevi.component.html',
  styleUrls: ['./kursevi.component.css']
})

export class KurseviComponent {

  @Input() courses:Course[] = [];

  

}
