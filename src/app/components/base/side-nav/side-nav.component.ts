import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BasePageComponent } from '../base-page/base-page.component';
import { Router } from '@angular/router';
import { aboutPageTrx, homePageTrx, showPageTrx } from '../../../app.routes';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss'
})
export class SideNavComponent extends BasePageComponent implements OnInit {

  @Output() toggleEvent = new EventEmitter();

  public homePageTrx = homePageTrx;
  public aboutPageTrx = aboutPageTrx;
  public showPageTrx = showPageTrx;

  constructor(
    private router: Router
  ) {
    super()
  }

  ngOnInit() {
    
  }

  navigate(url: string) {
    this.router.navigate([url]).then(() => this.onSidenavToggle());
  }

  onSidenavToggle() {
    this.toggleEvent.next(null);
  }

}
