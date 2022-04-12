import {Component, NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./content/pages/login/login.component";
import {HomeComponent} from "./content/pages/home/home.component";
import {UsersComponent} from "./content/pages/users/users.component";
import {QuestionsComponent} from "./content/pages/questions/questions.component";
import {AnswersComponent} from "./content/pages/answers/answers.component";
import {RegisterComponent} from "./content/pages/register/register.component";

const routes: Routes = [
  { path : 'login', component: LoginComponent},
  { path : 'home', component: HomeComponent},
  { path : 'users', component: UsersComponent},
  { path : 'questions', component: QuestionsComponent},
  { path : 'answers', component: AnswersComponent},
  { path : 'register', component: RegisterComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'} // default page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
