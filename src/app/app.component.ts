import { Component, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { BasePageComponent } from './components/base/base-page/base-page.component';
import { MatSidenav } from '@angular/material/sidenav';
import { aboutPageTrx, homePageTrx, showPageTrx } from './app.routes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent extends BasePageComponent implements OnInit {
  @ViewChild('sidenav') sidenav!: MatSidenav;

  public homePageTrx = homePageTrx;
  public aboutPageTrx = aboutPageTrx;
  public showPageTrx = showPageTrx;

  constructor(
    private router: Router,
  ) {
    super()
  }

  ngOnInit(): void {
    console.log('AppComponent ngOnInit')
  }

  toggleSidenav() {
    this.sidenav.toggle();
  }

  navigate(url: string) {
    this.router.navigate([url]);
  }

}
