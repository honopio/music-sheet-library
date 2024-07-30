import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ RouterModule, FormsModule ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  constructor(private router: Router) { }

  ngOnInit(): void {
    const searchIcon = document.getElementById('search-icon');
    const searchBar = document.getElementById('search-bar');

    if (searchIcon && searchBar) {
      searchIcon.addEventListener('click', (event) => {
        event.preventDefault();
        if (searchBar.style.display === 'none' || searchBar.style.display === '') {
          searchBar.style.display = 'inline-block';
        } else {
          this.onSearch((document.getElementById('search-bar') as HTMLInputElement).value);
        }
      });
    }
    document.addEventListener('click', this.hideSearchBar);
  }

  hideSearchBar = (event: MouseEvent) => {
    const searchBar = document.getElementById('search-bar');
    const searchIcon = document.getElementById('search-icon');
    if (searchBar && searchIcon) {
      if (event.target !== searchBar && event.target !== searchIcon && !searchIcon.contains(event.target as Node)) {
        searchBar.style.display = 'none';
      }
    }
  }

  onSearch(filter: string) {
    if (!(filter === '' || filter === null || filter === undefined)) {
    this.router.navigate(['/list'], { queryParams: { query: filter } });
    }
  }

  viewAll() {
    this.router.navigateByUrl('/').then(() => { //forces to recognize the navigation to the same url
      this.router.navigate(['/list']);
    });
  }

}
