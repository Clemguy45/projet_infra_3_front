// data.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private currentUser: any;
  private currentCard: any;

  setCurrentUser(user: any) {
    this.currentUser = user;
  }

  getCurrentUser() {
    return this.currentUser;
  }

  setCurrentCard(card:any){
    this.currentCard = card;
  }

  getCurrentCard(){
    return this.currentCard;
  }
}
