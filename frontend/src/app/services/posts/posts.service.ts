import {Injectable} from '@angular/core';
import {CrudService} from '../crud/crud.service';
import {Post} from '../../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private postList: Post[] = [];
  private url = 'posts';

  constructor(private crudService: CrudService<Post>) {
  }

  public fetchList() {
    this.crudService.getList(this.url).subscribe(list => {
      this.postList = list;
    });
  }

  public getList(): Post[] {
    return this.postList;
  }
}
