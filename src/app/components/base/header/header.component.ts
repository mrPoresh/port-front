import { Component, OnInit } from '@angular/core';
import { ThemeService, Theme  } from '../../../services/theme.service';
import { Subscription } from 'rxjs';
import { DeviceService, DeviceType, Breakpoints } from '../../../services/device.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  isDarkTheme!: boolean;

  deviceType!: DeviceType;
  breakpoints = Breakpoints;

  constructor(
    private themeService: ThemeService,
    private deviceService: DeviceService,
  ) {

  }

  ngOnInit() {
    console.log('HeaderComponent ngOnInit')

    this.deviceService.getDeviceType().subscribe((deviceType) => {
      this.deviceType = deviceType;
    })
  }


  toggleTheme() {
    this.themeService.toggleTheme();
  }

  ngOnDestroy() {

  }
}
