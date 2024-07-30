import { Component } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { SheetService } from '../sheet.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-sheet-list',
  standalone: true,
  imports: [ CommonModule, RouterModule, FormsModule, NgxPaginationModule ],
  templateUrl: './sheet-list.component.html',
  styleUrl: './sheet-list.component.scss'
})

export class SheetListComponent {

  sheets = this.sheetService.getSheets(); //all sheets
  sheetsFiltered = this.sheets;
  searchQuery: string = '';
  composers: string[] = [];
  instruments: string[] = [];
  page: number = 1;

  constructor(
    private sheetService: SheetService,
    private route: ActivatedRoute,
    private location: Location,
  ) { }

  ngOnInit() {
    this.composers = this.sheetService.getComposers();
    this.instruments = this.sheetService.getInstruments();

    this.route.queryParams.subscribe(params => {
      //composers handled seperately bc we need a perfect match
      if (params['composer']) { this.searchByComposer(params['composer']); }
      else if (params['query']) { this.search(params['query']); }
      else { this.resetFilter(); } // queryParams emits an event only when the url changes, so we need to reset the filter to be able to view all sheets again
    });
  }

  /**
   * sheetsFiltered is updated with the sheets that match the search query.
   */
  search(query: string) {
    this.searchQuery = query;
    if (!(query === "")) { this.sheetsFiltered = this.sheetService.searchSheets(query); }
    else {  this.resetFilter(); }
  }

  /**
   * sheetsFiltered is updated with the sheets that match the composer
   */
  searchByComposer(composer: string) {
    this.searchQuery = composer;
    this.sheetsFiltered = this.sheetService.searchByComposer(composer);
  }

  resetFilter() {
    this.sheetsFiltered = this.sheets;
    this.searchQuery = '';
  }

  goBack(): void { this.location.back(); }

  refineSearch(selectedComposers: HTMLSelectElement, selectedInstruments: HTMLSelectElement) {
    let composersFiltered = Array.from(selectedComposers.selectedOptions).map(option => option.value);
    let instrumentsFiltered = Array.from(selectedInstruments.selectedOptions).map(option => option.value);

    if (composersFiltered.includes('any') || composersFiltered.length === 0) { composersFiltered = this.composers; }
    if (instrumentsFiltered.includes('any') || instrumentsFiltered.length === 0) { instrumentsFiltered = this.instruments; }

    //concatenate every selected composer and instrument
    this.searchQuery = composersFiltered.concat(instrumentsFiltered).join(', ');
    this.sheetsFiltered = this.sheetService.intersect(instrumentsFiltered, composersFiltered);
  }
}
