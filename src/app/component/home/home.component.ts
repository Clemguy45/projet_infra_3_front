import { Component, OnInit } from '@angular/core';
import { CardService } from '../card/service/card.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cards: any[] = [];
  currentPage: number = 1;
  pageSize: number = 8;

  constructor(private cardService: CardService) {}

  ngOnInit() {
    this.loadCards();
  }

  loadCards() {
    this.cardService.getAllCards().subscribe((data: any) => {
      this.cards = data.data; // Utilisez data.data pour extraire les cartes du résultat API
    });
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.loadCards();
  }
}
