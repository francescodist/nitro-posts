import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PostPageComponent} from './post-page.component';
import {PostTreeListModule} from '../../components/post-tree-list/post-tree-list.module';
import {MatToolbarModule} from "@angular/material";
import {PostsService} from "../../services/posts/posts.service";
import createSpy = jasmine.createSpy;

describe('PostPageComponent', () => {
  let component: PostPageComponent;
  let fixture: ComponentFixture<PostPageComponent>;
  let mockPostService: PostsService;

  beforeEach(async(() => {
    mockPostService = new PostsService(null);
    TestBed.configureTestingModule({
      declarations: [PostPageComponent],
      imports: [
        PostTreeListModule,
        MatToolbarModule,
      ],
      providers: [{provide: PostsService, useValue: mockPostService}]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    mockPostService.fetchList = createSpy('fetchList');
    fixture = TestBed.createComponent(PostPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch post list on init', () => {
    expect(mockPostService.fetchList).toHaveBeenCalled();
  });
});
