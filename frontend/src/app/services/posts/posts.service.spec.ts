import {TestBed} from '@angular/core/testing';

import {PostsService} from './posts.service';
import {CrudService} from '../crud/crud.service';
import {of} from 'rxjs';
import {Post} from '../../models/post.model';

let mockCrudService: CrudService<Post>;
let service: PostsService;

describe('PostsService', () => {

  beforeEach(() => {
    mockCrudService = new CrudService(null);
    TestBed.configureTestingModule({
      providers: [{provide: CrudService, useValue: mockCrudService}]
    });
    service = TestBed.get(PostsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch a list of posts', async () => {
    mockCrudService.getList = () => of([{} as Post]);
    expect(service.getList().length).toBe(0);
    service.fetchList().add(() => {
      expect(service.getList().length).toBe(1);
    });
  });

  it('should group posts by yearWeek after fetch', async () => {
    mockCrudService.getList = () => of([
      {time: (new Date('January 1 2019').getTime() / 1000) + '', id: 0} as Post,
      {time: (new Date('February 1 2019').getTime() / 1000) + '', id: 1} as Post,
      {time: (new Date('January 1 2019').getTime() / 1000) + '', id: 2} as Post,
    ]);
    service.fetchList().add(() => {
      const groupedList = service.getGroupedList();
      expect(groupedList.length).toBe(2);
      const postGroup = groupedList.find(group => group.groupKey === '1_2019');
      expect(postGroup.postList.length).toBe(2);
    });
  });

  it('should be able to switch group key', () => {
    mockCrudService.getList = () => of([
      {location: 'Dublin', id: 0} as Post,
      {location: 'San Francisco', id: 1} as Post,
      {location: 'San Francisco', id: 2} as Post,
    ]);
    service.fetchList().add(() => {
      service.setGroupedList('location');
      const groupedList = service.getGroupedList();
      expect(groupedList.length).toBe(2);
      const postGroup = groupedList.find(group => group.groupKey === 'Dublin');
      expect(postGroup.postList.length).toBe(1);
    });
  });
});
