import { Routes } from '@angular/router';

import { HomePageComponent } from './components/home-page/home-page.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { ShowPageComponent } from './components/show-page/show-page.component';
//  import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const homePageTrx = '';
export const aboutPageTrx = 'about';
export const showPageTrx = 'show';

export const routes: Routes = [
  { path: homePageTrx, component: HomePageComponent },
  { path: aboutPageTrx, component: AboutPageComponent },
  { path: showPageTrx, component: ShowPageComponent },
  { path: '', redirectTo: homePageTrx, pathMatch: 'full' },
  //  { path: '**', component: PageNotFoundComponent },
];