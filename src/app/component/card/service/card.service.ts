import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  // Le rechargement APi se fait seulement si le localStorage.getItem('cachedCards') est null
  private apiUrl = 'https://db.ygoprodeck.com/api/v7/cardinfo.php?language=fr&num=16&offset=0&sort=new';
  // &num=8&offset=0&sort=new // les 8 dernières cartes
  // carte aléatoire(vérifier l'ajout de la langue) : https://db.ygoprodeck.com/api/v7/randomcard.php

  constructor(private http: HttpClient) { }

  getCards(): Observable<any[]> {
    const cachedCards = localStorage.getItem('cachedCards');

    if (cachedCards) {
      return of(JSON.parse(cachedCards));
    } else {
      return this.http.get<any[]>(this.apiUrl).pipe(
        tap(data => localStorage.setItem('cachedCards', JSON.stringify(data)))
      );
    }
  }
}
