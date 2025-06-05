import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { SheetListComponent } from './sheet-list/sheet-list.component';
import { SheetDetailComponent } from './sheet-detail/sheet-detail.component';
import { CreditsComponent } from './credits/credits.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: AboutComponent},
  { path: 'search', component: SheetListComponent },
  { path: 'list', component: SheetListComponent },
  { path: 'list/:id', component: SheetDetailComponent },
  { path: 'credits', component: CreditsComponent },
  { path: '**', component: PageNotFoundComponent }
];
