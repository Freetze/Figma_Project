import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css'],
})
export class LoginScreenComponent implements OnInit {
  constructor(private router: Router, private UserService: UserService) {}

  ngOnInit(): void {}

  obSubmit(value: { username: string; password: string}) {
    this.UserService.login(value);
    this.router.navigate(['/dashboard']);
  }
}
