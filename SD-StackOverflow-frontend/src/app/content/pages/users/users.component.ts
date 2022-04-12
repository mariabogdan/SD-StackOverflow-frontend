import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import usersData from './users.json';

interface User {

  userId: Number;
  email: String;
  username: String;
  password: String;
  userEnabled: Boolean;
  questions: Number[];
  answers: Number[];
}

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: User[] = usersData;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  test(){
    this.router.navigate(['/home'])
  }


}
