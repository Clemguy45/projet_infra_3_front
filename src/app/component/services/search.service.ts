import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private apiUrl = 'https://db.ygoprodeck.com/api/v7/cardinfo.php';
  subString: string = '';

  constructor(private http: HttpClient) {}

  searchCards(cardName: string): Observable<any> {
    
    const url = `${this.apiUrl}?name=${cardName}`;
    console.log(url);
    return this.http.get(url);
  }
}
