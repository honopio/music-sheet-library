import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SheetService } from '../sheet.service';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';

@Component({
  selector: 'app-sheet-detail',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './sheet-detail.component.html',
  styleUrl: './sheet-detail.component.scss'
})
export class SheetDetailComponent implements OnInit {
  sheet: any;

  constructor(
    private sheetService: SheetService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router

  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.params['id']; // Convert the id to a number
    this.sheet = this.sheetService.getSheetById(id);
  }

  goBack(): void {
    this.location.back();
  }


  /**
   * click event handlers
   */
  searchByComposer(composer: string) { this.router.navigate(['/list'], { queryParams: { composer } }); }
  searchByInstrument(query: string) { this.router.navigate(['/list'], { queryParams: { query } }); }
}
