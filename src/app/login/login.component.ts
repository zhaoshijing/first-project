import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent {
  username: string;
  password: string;

  constructor(private router: Router) {}

  login() {
    this.router.navigate(['yun']);
  }
}
