import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  handleSignUpClick() {
    // Logique pour gérer le clic sur le bouton d'inscription
    console.log('Sign Up button clicked');
}

handleLoginClick() {
    // Logique pour gérer le clic sur le bouton de connexion
    console.log('Login button clicked');
}
}
