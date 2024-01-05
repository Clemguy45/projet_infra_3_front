import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  // Le rechargement APi se fait seulement si le localStorage.getItem('cachedCards') est null
  private apiUrl = 'https://db.ygoprodeck.com/api/v7/cardinfo.php';
  // &num=8&offset=0&sort=new // les 8 dernières cartes
  // carte aléatoire(vérifier l'ajout de la langue) : https://db.ygoprodeck.com/api/v7/randomcard.php

  constructor(private http: HttpClient) { }

  getCards(pageSize: number, offset: number): Observable<any[]> {
    const cachedCards = localStorage.getItem('cachedCards');

    if (cachedCards) {
      return of(JSON.parse(cachedCards));
    } else {
      const url = `${this.apiUrl}?num=${pageSize}&offset=${offset}`;
      return this.http.get<any[]>(url).pipe(
        tap(data => localStorage.setItem('cachedCards', JSON.stringify(data)))
      );
    }
  }
  
  getAllCards(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
