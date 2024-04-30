import { Routes } from '@angular/router';

import { HomePageComponent } from './components/home-page/home-page.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { ShowPageComponent } from './components/show-page/show-page.component';
//  import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'show', component: ShowPageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  //  { path: '**', component: PageNotFoundComponent },
];