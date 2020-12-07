import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service'
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users = [];
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.userService.getUsers()
      .subscribe(
        res => {this.users = res;
        console.log(this.users)},
        err => {
          if (err instanceof HttpErrorResponse) {
            if (err.status === 401) {
              this.router.navigate(['/signin']);
            }
          }
        }
      )
  }

}
