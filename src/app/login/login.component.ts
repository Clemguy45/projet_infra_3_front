// login.component.ts
import { Component } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = 'admin';
  password: string = 'admin';
  error: string = '';

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private userService: UserService,
    private dataService: DataService
  ) {}

  onSubmit() {
    this.authService.login(this.username, this.password)
      .subscribe(
        (response) => {
          // Store user details in local storage
          localStorage.setItem('currentUser', JSON.stringify(response));
          // Get user details
          this.userService.getUserDetails(this.username)
            .subscribe((user) => {
              // Use DataService to share user information
              this.dataService.setCurrentUser(user);
              // Redirect to user profile
              this.router.navigate(['/user', user.username]);
            });
        },
        (error) => {
          this.error = 'Invalid username or password';
        }
      );
  }
}
