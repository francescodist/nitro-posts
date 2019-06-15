import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostGroupRadioComponent } from './post-group-radio.component';

describe('PostGroupRadioComponent', () => {
  let component: PostGroupRadioComponent;
  let fixture: ComponentFixture<PostGroupRadioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostGroupRadioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostGroupRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
