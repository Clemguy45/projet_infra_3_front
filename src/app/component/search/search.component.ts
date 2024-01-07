// search.component.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from '../services/search.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  cardName: string = '';
  searchResults: any = {};

  constructor(private searchService: SearchService, private router: Router, private dataService: DataService) {}

  search() {
    this.searchService.searchCards(this.cardName).subscribe(
      (response) => {
        this.searchResults = response.data;
        console.log(response);
        this.dataService.setCurrentCard(this.searchResults[0]);

        // Naviguer vers la page de détails avec le premier résultat de la recherche
        if (this.searchResults.length > 0) {
          const firstResultId = this.searchResults[0].id;
          // Passer les données de la carte au composant de détails via le service de routage
          this.router.navigate(['/card-details', firstResultId], { state: { cardDetails: this.searchResults[0] } });
        }
      },
      (error) => {
        console.error('Erreur lors de la recherche', error);
      }
    );
  }
}
