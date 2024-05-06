import { Directive, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[appToggBtn]',
})
export class ToggBtnDirective {
  @Input() toggled: boolean = false;
  @Output() toggledChange = new EventEmitter<boolean>();

  @HostBinding('class.toggled') get isToggled() {
    return this.toggled;
  }

  @HostListener('click') toggle() {
    this.toggled = !this.toggled;
    this.toggledChange.emit(this.toggled); // Emit the change
  }
}
