// authentication.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private apiUrl = environment.apiUrl;
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  private loggedIn: boolean = false;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser') || '{}'));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  getCurrentUser(): any {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/user/login`, { username, password })
      .pipe(response => {
        // Store user details in local storage to keep user logged in
        localStorage.setItem('currentUser', JSON.stringify(response));
        this.currentUserSubject.next(response);
        this.loggedIn = true; // Mettez à jour le statut de connexion
        return response;
      });
  }

  logout() {
    // Remove user details from local storage
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.loggedIn = false; // Mettez à jour le statut de connexion
  }
}
