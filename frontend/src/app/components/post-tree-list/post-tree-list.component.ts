import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../models/post.model';

export interface PostTreeItem {
  groupKey: string;
  groupTitle: string;
  postList: Post[];
}

@Component({
  selector: 'app-post-tree-list',
  templateUrl: './post-tree-list.component.html',
  styleUrls: ['./post-tree-list.component.scss']
})
export class PostTreeListComponent implements OnInit {

  @Input() treeList: PostTreeItem[];

  constructor() {
  }

  ngOnInit() {
  }

  public trackByGroupName(index: number, postTreeItem: PostTreeItem) {
    return postTreeItem.groupTitle;
  }

}
