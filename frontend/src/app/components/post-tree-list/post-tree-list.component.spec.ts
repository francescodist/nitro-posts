import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import {PostTreeItem, PostTreeListComponent} from './post-tree-list.component';
import {PostGroupRadioComponent} from './post-group-radio/post-group-radio.component';
import {
  MatButtonModule,
  MatCardModule,
  MatDividerModule,
  MatExpansionModule,
  MatIconModule,
  MatInputModule, MatRadioModule
} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {By} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {Post} from '../../models/post.model';
import {DirectivesModule} from '../../directives/directives.module';

describe('PostTreeListComponent', () => {
  let component: PostTreeListComponent;
  let fixture: ComponentFixture<PostTreeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PostTreeListComponent, PostGroupRadioComponent],
      imports: [
        MatExpansionModule,
        MatIconModule,
        FormsModule,
        MatButtonModule,
        MatInputModule,
        MatDividerModule,
        MatCardModule,
        MatRadioModule,
        BrowserAnimationsModule,
        DirectivesModule
      ]
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

  it('should render an expansion panel for every post group', () => {
    component.treeList = [
      {groupKey: 'key1'} as PostTreeItem,
      {groupKey: 'key2'} as PostTreeItem
    ];
    fixture.detectChanges();
    const expansionPanels = fixture.debugElement.queryAll(By.css('mat-expansion-panel'));
    expect(expansionPanels.length).toBe(2);
  });

  it('should show a list of posts in the expansion panel', () => {
    component.treeList = [
      {groupKey: 'key1', postList: [{}, {}, {}]} as PostTreeItem,
    ];
    fixture.detectChanges();
    const expansionPanel = fixture.debugElement.query(By.css('mat-expansion-panel'));
    const postItems = expansionPanel.queryAll(By.css('.post-item'));
    expect(postItems.length).toBe(3);
  });

  it('should show input fields when a post is being edited', fakeAsync(async () => {
    const postToEdit = {author: 'author'} as Post;
    component.treeList = [
      {groupKey: 'key1', postList: [postToEdit, {}, {}]} as PostTreeItem,
    ];
    fixture.detectChanges();
    let inputFields = fixture.debugElement.queryAll(By.css('mat-form-field input'));
    expect(inputFields.length).toBe(0);
    component.editablePost = postToEdit;
    component.editModel = {author: 'author', location: ''};
    fixture.detectChanges();
    tick();
    inputFields = fixture.debugElement.queryAll(By.css('mat-form-field input'));
    expect(inputFields.length).toBe(2);
    const authorInputField = inputFields.find(input => {
      return (input.nativeElement as HTMLInputElement).value === 'author';
    });
    expect(authorInputField).toBeTruthy();
  }));

  it('should update post after saving', () => {
    const postToEdit = {author: 'author', location: 'location'};
    const editModel = {author: 'newAuthor', location: 'newLocation'};
    expect(postToEdit.author).toBe('author');
    expect(postToEdit.location).toBe('location');
    component.editModel = editModel;
    component.savePost(postToEdit as Post);
    expect(postToEdit.author).toBe('newAuthor');
    expect(postToEdit.location).toBe('newLocation');
  });
});
