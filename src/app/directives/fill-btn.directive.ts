import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appFillBtn]',
})
export class FillBtnDirective {
  @Input() btnSize?: 'small' | 'medium' | 'large';
  @Input() btnColor?: 'primary' | 'accent' | 'warn';

  @HostBinding('class') get classes() {
    return `${this.btnSize} ${this.btnColor}`;
  }

  constructor() { }

}
