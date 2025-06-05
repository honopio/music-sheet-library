import { SheetService } from './../sheet.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ RouterModule, CommonModule ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  favSheets: any[] = [];

  constructor(private router: Router, private SheetService: SheetService) { }

  ngOnInit() {
    this.favSheets.push(this.SheetService.getSheetById(7));
    this.favSheets.push(this.SheetService.getSheetById(6));
    this.favSheets.push(this.SheetService.getSheetById(2));
  }

  search(query: string) {
    this.router.navigate(['/list'], { queryParams: { query } });
  }

  searchByComposer(composer: string) {
    this.router.navigate(['/list'], { queryParams: { composer } });
  }

  scroll(sectionId: string) {
    const section = document.getElementById(sectionId);
    if (section) { section.scrollIntoView({ behavior: 'smooth' }); }
  }

}
