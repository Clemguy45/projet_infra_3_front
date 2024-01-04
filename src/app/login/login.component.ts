<<<<<<< HEAD
// login.component.ts
import { Component } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { DataService } from '../services/data.service';
=======
import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "../services/authentication.service";
import {NotificationService} from "../services/notification.service";
import {User} from "../models/user";
import {Subscription} from "rxjs";
import {HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {NotificationType} from "..//enum/notification-type.enum";
import {NgForm} from "@angular/forms";
>>>>>>> eab2d10578be65cfb6c9257d021c3ff40553ea7e

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

<<<<<<< HEAD
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
=======

  constructor(private router: Router, private authenticationService: AuthenticationService,
              private notificationService: NotificationService) { }

  //redirige si l'user est deja login vers la mainpage
  ngOnInit(): void {
    if (this.authenticationService.isUserLoggedIn()){
      this.router.navigateByUrl('/user/management');
    } else {
      this.router.navigateByUrl('/login')
    }
  }
  public onLogin(user: User, form: NgForm): void{
    this.showLoading = true;
    this.subscriptions.push(

      this.authenticationService.login(user).subscribe({
        next:(response) => {
          this.token = response.headers.get('Jwt-Token');
          this.authenticationService.saveToken(this.token);
          this.authenticationService.addUserToLocalCache(response.body);
          this.router.navigateByUrl('/user/management');
          this.showLoading = false;
>>>>>>> eab2d10578be65cfb6c9257d021c3ff40553ea7e
        },
        (error) => {
          this.error = 'Invalid username or password';
        }
      );
  }
}
