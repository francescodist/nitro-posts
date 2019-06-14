import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostTreeListComponent } from './post-tree-list.component';

describe('PostTreeListComponent', () => {
  let component: PostTreeListComponent;
  let fixture: ComponentFixture<PostTreeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostTreeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostTreeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
