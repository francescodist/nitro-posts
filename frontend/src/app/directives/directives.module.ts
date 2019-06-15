import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FadeInByPositionDirective } from './fade-in-by-position/fade-in-by-position.directive';

@NgModule({
  declarations: [FadeInByPositionDirective],
  imports: [
    CommonModule
  ], exports: [FadeInByPositionDirective]
})
export class DirectivesModule { }
