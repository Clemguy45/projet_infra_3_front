import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError } from "rxjs";
import { environment } from "src/environments/environment.development";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  registerNoGeneratedPassword(firstName: string, lastName: string, username: string, email: string) {
    throw new Error('Method not implemented.');
  }
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  register(firstName: string, lastName: string, username: string, email: string, password: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    const user = {
      firstName: firstName,
      lastName: lastName,
      username: username,
      email: email,
      password: password
    };

    return this.http.post<any>(`${this.apiUrl}/user/register/no-generated-password`, user, { headers })
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: any): Observable<never> {
    console.error('Une erreur s\'est produite', error);
    throw error;
  }
}
