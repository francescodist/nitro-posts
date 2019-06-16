import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Post} from '../../models/post.model';
import {GroupKey, PostsService} from '../../services/posts/posts.service';

export interface PostTreeItem {
  groupKey: string;
  groupTitle: string;
  postList: Post[];
}

class EditPostModel {
  author = '';
  location = '';
}

@Component({
  selector: 'app-post-tree-list',
  templateUrl: './post-tree-list.component.html',
  styleUrls: ['./post-tree-list.component.scss']
})
export class PostTreeListComponent implements OnInit {

  @Input() treeList: PostTreeItem[];

  @Output() selectGroupKey = new EventEmitter<GroupKey>();
  @Output() postSaved = new EventEmitter();

  editablePost: Post;
  editModel: EditPostModel;

  constructor(private postService: PostsService) {
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
    if (post) {
      this.editModel = new EditPostModel();
      Object.keys(this.editModel).forEach(key => {
        this.editModel[key] = post[key];
      });
    }
    this.editablePost = post;
  }

  public savePost(post: Post) {
    Object.keys(this.editModel).forEach(key => {
      post[key] = this.editModel[key];
    });
    this.editPost(null);
    this.postSaved.emit();
  }
}
