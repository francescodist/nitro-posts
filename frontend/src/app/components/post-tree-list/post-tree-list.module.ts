import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostTreeListComponent } from './post-tree-list.component';
import {MatExpansionModule, MatListModule, MatRadioModule} from '@angular/material';

@NgModule({
  declarations: [PostTreeListComponent],
  exports: [
    PostTreeListComponent
  ],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatListModule,
    MatRadioModule
  ]
})
export class PostTreeListModule { }
