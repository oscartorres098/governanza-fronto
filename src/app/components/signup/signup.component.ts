import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public user = { email: '', password: '', rol: '', nombre: '', apellido: '', ultimo_ingreso: ''}; 
  constructor(
    public authService: AuthService,
    private router: Router,
    ) { }

  ngOnInit() {
  }

  signUp() {
    this.authService.signUpUser(this.user)
      .subscribe(
        res => {
          localStorage.setItem('token', res.token);
          localStorage.setItem('rol', res.rol);
          this.router.navigate(['/info']);
        },
        err => console.log(err)
      )
  }

}
