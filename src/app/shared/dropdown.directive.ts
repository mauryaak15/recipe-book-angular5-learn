import { Directive, Renderer2, ElementRef, Input, OnInit, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {
  // @Input() set appDropdown (value: string) {
  //   if (value === 'open') {
  //     this.renderer.addClass(this.elRef.nativeElement, value);
  //   }else {
  //     this.renderer.removeClass(this.elRef.nativeElement, 'open');
  //   }
  // }
  @HostBinding('class.open') isOpen = false;
  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }
  constructor(private renderer: Renderer2, private elRef: ElementRef) { }
  ngOnInit(): void {
  }
}
