import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavigacijaComponent } from './components/navigacija/navigacija.component';
import { KurseviComponent } from './components/kursevi/kursevi.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { CourseFormComponent } from './components/course-form/course-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavigacijaComponent,
    KurseviComponent,
    CourseDetailsComponent,
    CourseFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
