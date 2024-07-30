import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SheetListComponent } from './sheet-list/sheet-list.component';
import { SheetDetailComponent } from './sheet-detail/sheet-detail.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, HomeComponent, AboutComponent, SheetListComponent, SheetDetailComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'easy-sheet';

  constructor(private router: Router) {}

  handleSearch(query: string) {
    console.log("Received in app component : " + query);
    this.router.navigate(['/list'], { queryParams: { query } });

  }
}
