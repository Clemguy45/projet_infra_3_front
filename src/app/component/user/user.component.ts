// user.component.ts
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { UserService } from '../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  currentUser: any;

  constructor(private authService: AuthenticationService, private userService: UserService, private route: ActivatedRoute, private dataService: DataService, private router: Router) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const username = params['username'];
      // Get user details from DataService
      this.currentUser = this.dataService.getCurrentUser();
      if (!this.currentUser) {
        // If currentUser is not available, fetch it from UserService
        this.userService.getUserDetails(username)
          .subscribe(user => {
            this.currentUser = user;
            this.dataService.setCurrentUser(user);
          });
      }
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
