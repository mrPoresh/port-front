import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, fromEvent } from 'rxjs';
import { map, throttleTime } from 'rxjs/operators';
import { DeviceDetectorService } from 'ngx-device-detector';

export enum Breakpoints {
  XSMALL = 480,   // Small mobile devices
  SMALL = 768,    // Larger mobile devices, small tablets
  MEDIUM = 992,   // Tablets and small desktops
  LARGE = 1200,   // Larger desktops (standard desktop screens)
  XLARGE = 1440,  // Large desktop screens
  XXLARGE = 1920, // Extra large screens, high-resolution displays
}

export interface DeviceType {
  breakpoint: number,
  type: {
    isDesktop: boolean,
    isTablet: boolean,
    isMobile: boolean,
  }
}

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  private deviceType: DeviceType = {
    breakpoint: window.innerWidth,
    type: {
      isDesktop: false,
      isTablet: false,
      isMobile: false,
    }
  };

  private $deviceType = new BehaviorSubject<DeviceType>(this.deviceType);

  constructor(protected deviceDetector: DeviceDetectorService) {
    this.detectDeviceType();
    this.detectBreakPoint(window.innerWidth);

    fromEvent(window, 'resize')
      .pipe(
        throttleTime(300),
        map((event: Event) => (event.target as Window).innerWidth)
      )
      .subscribe(width => this.detectBreakPoint(width));
  }

  private detectBreakPoint(width: number) {
    let breakpoint: number;
  
    if (width < Breakpoints.SMALL) {
      breakpoint = Breakpoints.XSMALL;  // Use the actual numeric value
    } else if (width < Breakpoints.MEDIUM) {
      breakpoint = Breakpoints.SMALL;
    } else if (width < Breakpoints.LARGE) {
      breakpoint = Breakpoints.MEDIUM;
    } else if (width < Breakpoints.XLARGE) {
      breakpoint = Breakpoints.LARGE;
    } else if (width < Breakpoints.XXLARGE) {
      breakpoint = Breakpoints.XLARGE;
    } else {
      breakpoint = Breakpoints.XXLARGE;
    }
  
    // Only update if the breakpoint has changed
    if (this.deviceType.breakpoint !== breakpoint) {
      this.deviceType.breakpoint = breakpoint;
      this.$deviceType.next(this.deviceType);
    }
  }

  private detectDeviceType(): void {
    this.deviceType.type = {
      isDesktop: this.deviceDetector.isDesktop(),
      isTablet: this.deviceDetector.isTablet(),
      isMobile: this.deviceDetector.isMobile(),
    };
    this.$deviceType.next(this.deviceType);
  }

  getDeviceType(): Observable<DeviceType> {
    return this.$deviceType.asObservable();
  }
}
