import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appFlatBtn]'
})
export class FlatBtnDirective {
  @Input() btnSize?: 'small' | 'medium' | 'large';
  @Input() btnColor?: 'primary' | 'accent' | 'warn';

  @HostBinding('class') get classes() {
    return `${this.btnSize} ${this.btnColor}`;
  }

  constructor() { }

}
