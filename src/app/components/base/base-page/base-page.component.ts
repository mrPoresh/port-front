import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-base-page',
  templateUrl: './base-page.component.html',
  styleUrl: './base-page.component.sass'
})
export class BasePageComponent {

  protected unsubscribe: Subject<void> = new Subject();

  constructor() {

  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
  
}
