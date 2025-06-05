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
  isMobileMenuOpen = false;

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

    // Close mobile menu when clicking outside or on escape key
    document.addEventListener('keydown', this.handleEscapeKey);
  }

  ngOnDestroy(): void {
    document.removeEventListener('click', this.hideSearchBar);
    document.removeEventListener('keydown', this.handleEscapeKey);
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;

    // Prevent body scroll when menu is open
    if (this.isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
    document.body.style.overflow = '';
  }

  handleEscapeKey = (event: KeyboardEvent): void => {
    if (event.key === 'Escape' && this.isMobileMenuOpen) {
      this.closeMobileMenu();
    }
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
      this.closeMobileMenu();
    }
  }

  viewAll() {
    this.router.navigateByUrl('/').then(() => { //forces to recognize the navigation to the same url
      this.router.navigate(['/list']);
    });
  }

}
