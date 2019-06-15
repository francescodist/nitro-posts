import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Post} from '../../models/post.model';
import {GroupKey} from '../../services/posts/posts.service';

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

  @Output() selectGroupKey = new EventEmitter<GroupKey>();

  editablePost: Post;

  constructor() {
  }

  ngOnInit() {
  }

  public trackByGroupName(index: number, postTreeItem: PostTreeItem) {
    return postTreeItem.groupTitle;
  }

  public onSelectGroupKey(value: GroupKey) {
    this.editablePost = null;
    this.selectGroupKey.emit(value);
  }

  public editPost(post: Post) {
    this.editablePost = this.editablePost === post ? null : post;
  }
}
