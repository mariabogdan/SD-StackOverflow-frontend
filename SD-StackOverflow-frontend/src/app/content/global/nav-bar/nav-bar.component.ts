import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  goToUsersPage() {
    this.router.navigate(['/users'])
  }

  goToQuestionsPage() {
    this.router.navigate(['/questions'])
  }

  goToAnswersPage() {
    this.router.navigate(['/answers'])
  }
}
