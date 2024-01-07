import { Component, OnInit } from '@angular/core';
import { CardService } from './service/card.service';


@Component({
  selector: 'app-card-home',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
   cards: any = {};
  displayedCards: any = [];
  currentPage: number = 1;
  pageSize: number = 6;

  constructor(private cardService: CardService) {}

  ngOnInit() {
    this.loadCards();
  }

  loadCards() {
    this.cardService.getAllCards().subscribe((data: any) => {
      this.cards = data.data;
      this.updateDisplayedCards();
    });
  }

  updateDisplayedCards() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.displayedCards = this.cards.slice(startIndex, endIndex);
  }

  onPageChange(newPage: number) {
    if (newPage >= 1 && newPage <= this.totalPages) {
      this.currentPage = newPage;
      this.updateDisplayedCards();
    }
  }

  get totalPages(): number {
    return Math.ceil(this.cards.length / this.pageSize);
  }
  
}

