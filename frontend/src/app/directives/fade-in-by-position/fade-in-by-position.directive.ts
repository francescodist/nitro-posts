import {Directive, ElementRef, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appFadeInByPosition]'
})
export class FadeInByPositionDirective implements OnInit {

  @Input('appFadeInByPosition') position: number;
  private element: HTMLElement;
  private animationDuration = 200;

  constructor(ref: ElementRef<HTMLElement>) {
    this.element = ref.nativeElement;
  }

  ngOnInit(): void {
    this.element.style.transition = `opacity ${this.animationDuration}ms linear ${this.animationDuration * this.position / 3}ms`;
    this.element.style.opacity = '0';
    setTimeout(() => {
      this.element.style.opacity = '1.0';
    }, 0);
  }

}
