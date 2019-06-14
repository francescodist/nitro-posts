import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Post} from '../../models/post.model';
import {GroupKey} from '../../services/posts/posts.service';
import {MatRadioChange} from "@angular/material";

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

  groupKeys: { title: string, key: GroupKey, checked?: boolean }[] = [
    {key: 'yearWeek', title: 'Week', checked: true},
    {key: 'author', title: 'Author'},
    {key: 'location', title: 'Location'},
  ];

  constructor() {
  }

  ngOnInit() {
  }

  public trackByGroupName(index: number, postTreeItem: PostTreeItem) {
    return postTreeItem.groupTitle;
  }

  public onSelectGroupKey(event: MatRadioChange) {
    this.selectGroupKey.emit(event.value);
  }
}
