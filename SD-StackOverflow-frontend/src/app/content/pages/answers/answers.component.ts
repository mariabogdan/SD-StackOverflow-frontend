import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import answersData from './answers.json';

interface Answer {

  answerId: Number;
  content: String;
  timestamp: String;
  authorId: Number;
  questionId: Number;
  votes: Number;
}

@Component({
  selector: 'answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.scss']
})
export class AnswersComponent implements OnInit {

  answersArray: Answer[] = answersData;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  test(){
    this.router.navigate(['/home'])
  }
}
