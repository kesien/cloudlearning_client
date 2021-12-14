import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from '../_services/alert.service';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user: { username: string; password: string } = {
    username: '',
    password: '',
  };

  constructor(
    private authService: AuthService,
    private alertService: AlertService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.user.username = '';
    this.user.password = '';
  }

  login() {
    this.authService.login(this.user).subscribe(
      (response) => console.log(response),
      (error) => this.alertService.error(error),
      () => this.router.navigate(['/home'])
    );
  }
}
