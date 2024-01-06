import { Component } from '@angular/core';
import { RegisterService } from '../services/register.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  firstName: string = '';
  lastName: string = '';
  username: string = '';
  email: string = '';
  password: string = '';

  constructor(private registerService: RegisterService, private router: Router,) {
  }

  register() {
    
    this.registerService.register(this.firstName, this.lastName, this.username, this.email, this.password).subscribe(
      response => {
        console.log('Inscription réussie', response);
        this.router.navigate(['/']);
      },
      error => {
        console.error('Erreur lors de l\'inscription', error);
      }
    );
  }
}