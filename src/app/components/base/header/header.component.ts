import { Component, OnInit } from '@angular/core';
import { ThemeService, Theme  } from '../../../services/theme.service';
import { Subscription, takeUntil } from 'rxjs';
import { DeviceService, DeviceType, Breakpoints } from '../../../services/device.service';
import { BasePageComponent } from '../base-page/base-page.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent extends BasePageComponent implements OnInit {
  isDarkTheme!: boolean;

  deviceType!: DeviceType;
  breakpoints = Breakpoints;

  constructor(
    private themeService: ThemeService,
    private deviceService: DeviceService,
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

}
