import {Injectable} from '@angular/core';
import {CrudService} from '../crud/crud.service';
import {Post} from '../../models/post.model';
import {PostTreeItem} from '../../components/post-tree-list/post-tree-list.component';
import {Subscription} from 'rxjs';

export type GroupKey = ('yearWeek' | 'author' | 'location') & keyof Post;

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private postList: Post[] = [];
  private groupedPostList: PostTreeItem[];
  private url = 'posts';

  constructor(private crudService: CrudService<Post>) {
  }

  public fetchList(): Subscription {
    return this.crudService.getList(this.url).subscribe(list => {
      this.postList = list.map(post => new Post(post));
      this.setGroupedList('yearWeek');
    });
  }

  public getList(): Post[] {
    return this.postList;
  }

  public getGroupedList(): PostTreeItem[] {
    return this.groupedPostList;
  }

  public setGroupedList(groupKey: GroupKey) {
    this.groupedPostList = this.postList.reduce((postTreeList, post) => {
      const group: PostTreeItem = postTreeList.find((postTreeItem: PostTreeItem) => {
        return postTreeItem.groupKey === post[groupKey];
      });
      if (group) {
        group.postList.push(post);
      } else {
        const groupTitle = {
          yearWeek: `Week ${post.week} (${post.year})`,
          author: `Author: ${post.author}`,
          location: `Location: ${post.location}`,
        };
        const newGroup: PostTreeItem = {
          groupKey: post[groupKey],
          groupTitle: groupTitle[groupKey],
          postList: [post]
        };
        postTreeList.push(newGroup);
      }
      return postTreeList;
    }, []);
  }
}
