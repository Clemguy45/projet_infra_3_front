// search.component.ts
import { Component } from '@angular/core';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  cardName: string = '';
  searchResults: any[] = [];

  constructor(private searchService: SearchService) {}

  search() {
    this.searchService.searchCards(this.cardName).subscribe(
      (response) => {
        this.searchResults = response.data; 
        console.log("ca marche");
      },
      (error) => {
        console.error('Erreur lors de la recherche', error);
      }
    );
  }
}
