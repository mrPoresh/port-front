import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appIconBtn]',
})
export class IconBtnDirective {
  @Input() btnSize?: 'small' | 'medium' | 'large';
  @Input() btnColor?: 'primary' | 'accent' | 'warn';

  @HostBinding('class') get classes() {
    return `${this.btnSize} ${this.btnColor}`;
  }

  constructor() { }

}
