import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service'
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  user = { email: '', rol: '', nombre: '', apellido: '', ultimo_ingreso: ''};
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.userService.getInfo()
      .subscribe(
        res => this.user = res,
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


