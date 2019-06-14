import {Injectable} from '@angular/core';
import {CrudService} from '../crud/crud.service';
import {Post} from '../../models/post.model';
import {PostTreeItem} from '../../components/post-tree-list/post-tree-list.component';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private postList: Post[] = [];
  private groupedPostList: PostTreeItem[];
  private url = 'posts';

  constructor(private crudService: CrudService<Post>) {
  }

  public fetchList() {
    this.crudService.getList(this.url).subscribe(list => {
      this.postList = list.map(post => new Post(post));
      this.setGroupedList(this.postList);
    });
  }

  public getList(): Post[] {
    return this.postList;
  }

  public getGroupedList(): PostTreeItem[] {
    return this.groupedPostList;
  }

  private setGroupedList(postList: Post[]) {
    this.groupedPostList = postList.reduce((postTreeList, post) => {
      const group: PostTreeItem = postTreeList.find((postTreeItem: PostTreeItem) => {
        return postTreeItem.groupKey === post.yearWeek;
      });
      if (group) {
        group.postList.push(post);
      } else {
        const newGroup: PostTreeItem = {
          groupKey: post.yearWeek,
          groupTitle: `Week ${post.week} (${post.year})`,
          postList: [post]
        };
        postTreeList.push(newGroup);
      }
      return postTreeList;
    }, []);
  }
}
