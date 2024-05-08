import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ThemeService, Theme  } from '../../../services/theme.service';
import { Subscription, takeUntil } from 'rxjs';
import { DeviceService, DeviceType, Breakpoints } from '../../../services/device.service';
import { BasePageComponent } from '../base-page/base-page.component';
import { Router } from '@angular/router';
import { aboutPageTrx, homePageTrx, showPageTrx } from '../../../app.routes';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent extends BasePageComponent implements OnInit {
  @Output() sidenavToggle = new EventEmitter<void>();

  isDarkTheme!: boolean;

  deviceType!: DeviceType;
  breakpoints = Breakpoints;

  public homePageTrx = homePageTrx;
  public aboutPageTrx = aboutPageTrx;
  public showPageTrx = showPageTrx;

  constructor(
    private themeService: ThemeService,
    private deviceService: DeviceService,
    private router: Router,
  ) {
    super()
  }

  ngOnInit() {
    this.deviceService.getDeviceType().pipe(takeUntil(this.unsubscribe)).subscribe((deviceType) => {
      this.deviceType = deviceType;
    })
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  toggleSidenav() {
    this.sidenavToggle.emit();
  }

  navigate(url: string) {
    this.router.navigate([url]);
  }

  scrollToBottom(): void {
    console.log('scrol')
    window.scrollTo({
      top: document.body.scrollHeight,
      left: 0,
      behavior: 'smooth'
    });
  }

}
