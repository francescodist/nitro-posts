import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostTreeListComponent } from './post-tree-list.component';
import {
  MatButtonModule,
  MatExpansionModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatRadioModule
} from '@angular/material';
import {FormsModule} from '@angular/forms';
import { PostGroupRadioComponent } from './post-group-radio/post-group-radio.component';

@NgModule({
  declarations: [PostTreeListComponent, PostGroupRadioComponent],
  exports: [
    PostTreeListComponent
  ],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatListModule,
    MatRadioModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    FormsModule
  ]
})
export class PostTreeListModule { }
