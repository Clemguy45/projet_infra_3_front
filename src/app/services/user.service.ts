// user.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = environment.apiUrl;
  private currentUser: any;

  constructor(private http: HttpClient) {}

  setCurrentUser(user: any): void {
    this.currentUser = user;
  }

<<<<<<< HEAD
  getCurrentUser(): any {
    return this.currentUser;
=======
  public addUsersToLocalCache(users: User[]): void {
    localStorage.setItem('users', JSON.stringify(users));
  }
  public getUsersFromLocalCache(): any {
    if (localStorage.getItem('users')){
      // @ts-ignore
      return JSON.parse(localStorage.getItem('users'));
    }
    return null;
>>>>>>> eab2d10578be65cfb6c9257d021c3ff40553ea7e
  }

  getUserDetails(username: string): Observable<any> {
    return this.http.get<User>(`${this.apiUrl}/user/${username}/profile`)
    .pipe(
      catchError((error) => {
        console.error('Error fetching user details:', error);
        throw error; // Rethrow the error for the component to handle
      })
    );
  }
}
