import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './content/pages/login/login.component';
import { HomeComponent } from './content/pages/home/home.component';
import {NavBarComponent} from "./content/global/nav-bar/nav-bar.component";
import { UsersComponent } from './content/pages/users/users.component';
import { QuestionsComponent } from './content/pages/questions/questions.component';
import { AnswersComponent } from './content/pages/answers/answers.component';
import { RegisterComponent } from './content/pages/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavBarComponent,
    HomeComponent,
    UsersComponent,
    QuestionsComponent,
    AnswersComponent,
    RegisterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
