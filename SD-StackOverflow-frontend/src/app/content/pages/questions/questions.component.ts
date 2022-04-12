import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import questionsData from './questions.json';

interface Question {

  questionId: Number;
  title: String;
  content: String;
  timestamp: String;
  authorId: Number;
  tags: String[];
  votes: Number;
}

@Component({
  selector: 'questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  questionsArray: Question[] = questionsData;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  test(){
    this.router.navigate(['/home'])
  }
}
