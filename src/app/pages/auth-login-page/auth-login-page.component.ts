import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-login-page',
  templateUrl: './auth-login-page.component.html',
  styleUrls: ['./auth-login-page.component.css']
})
export class AuthLoginPageComponent implements OnInit {
  feedbackEnabled = false;
  error = null;
  processing = false;
  username: String;
  password: String;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  submitForm(form) {
    this.error = '';
    this.feedbackEnabled = true;
      if (form.valid) {
      this.processing = true;
      this.authService.login({
        username: this.username,
        password: this.password
      })
        .then((data) => {
        this.router.navigate(['/playlist']);
      //     // ... maybe turn this to false if your're staying on the page - this.processing = false;
       })
        .catch((err) => {
       this.error = err.error.error; // :-)
       this.processing = false;
       this.feedbackEnabled = false;
        });
    }
  }
}
