import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostTreeListComponent } from './post-tree-list.component';
import {
  MatButtonModule, MatCardModule,
  MatExpansionModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatRadioModule
} from '@angular/material';
import {FormsModule} from '@angular/forms';
import { PostGroupRadioComponent } from './post-group-radio/post-group-radio.component';
import {DirectivesModule} from "../../directives/directives.module";

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
    FormsModule,
    MatCardModule,
    DirectivesModule
  ]
})
export class PostTreeListModule { }
