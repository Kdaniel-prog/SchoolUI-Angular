import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule} from "@angular/router";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { HighlightSearchPipe } from './highlight-search.pipe';
import { GradesComponent } from './grades/grades.component';
import { SubjectsComponent } from './subjects/subjects.component';
import {OrderModule} from "ngx-order-pipe";
import { StudentGradeComponent } from './student-grade/student-grade.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    HighlightSearchPipe,
    GradesComponent,
    SubjectsComponent,
    StudentGradeComponent,
    TestComponent
  ],
    imports: [
        BrowserModule,
        NgxPaginationModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        NgbModule,
        ReactiveFormsModule,
        OrderModule,
        Ng2SearchPipeModule
    ],
  exports: [RouterModule, AppComponent],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
