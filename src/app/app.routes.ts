import { HomeComponent } from './pages/home/home.component';
import { Routes } from '@angular/router';
import { SearchComponent } from './pages/search/search.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'search',
    component: SearchComponent,
  },
];
