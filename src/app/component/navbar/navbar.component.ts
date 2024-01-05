import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  
  constructor(private router: Router) {}

  handleSignUpClick() {
    // Logique pour gérer le clic sur le bouton d'inscription
    console.log('Sign Up button clicked');
}

handleLoginClick() {
    // Logique pour gérer le clic sur le bouton de connexion
    console.log('Login button clicked');
    this.router.navigate(['/login']);
}
}
