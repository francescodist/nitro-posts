import {Component, OnInit} from '@angular/core';
import {GroupKey, PostsService} from '../../services/posts/posts.service';
import {PostTreeItem} from '../../components/post-tree-list/post-tree-list.component';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent implements OnInit {

  constructor(private postService: PostsService) {
  }

  ngOnInit() {
    this.postService.fetchList();
  }

  public getGroupedPostsList(): PostTreeItem[] {
    return this.postService.getGroupedList();
  }

  public setGroupedPostsList(groupKey: GroupKey) {
    this.postService.setGroupedList(groupKey);
  }

  public refreshGroupedList() {
    this.postService.setGroupedList();
  }

}
