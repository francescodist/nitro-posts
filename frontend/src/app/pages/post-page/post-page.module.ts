import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostPageRoutingModule } from './post-page-routing.module';
import { PostPageComponent } from './post-page.component';
import {PostTreeListModule} from '../../components/post-tree-list/post-tree-list.module';
import {MatToolbarModule} from "@angular/material";

@NgModule({
  declarations: [PostPageComponent],
  imports: [
    CommonModule,
    PostPageRoutingModule,
    PostTreeListModule,
    MatToolbarModule
  ]
})
export class PostPageModule { }
