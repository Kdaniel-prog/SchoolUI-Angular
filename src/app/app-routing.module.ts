import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardStudentComponent } from './board-student/board-student.component';
import { BoardTeacherComponent } from './board-teacher/board-teacher.component';
import {GradesComponent} from "./grades/grades.component";
import {SubjectsComponent} from "./subjects/subjects.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'grades', component: GradesComponent },
  { path: 'subjects', component: SubjectsComponent },
  { path: 'student', component: BoardStudentComponent },
  { path: 'teacher', component: BoardTeacherComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
