import {async, ComponentFixture, TestBed, tick} from '@angular/core/testing';

import {PostGroupRadioComponent} from './post-group-radio.component';
import {MatCardModule, MatRadioModule} from '@angular/material';
import {By} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import createSpy = jasmine.createSpy;
import {EventEmitter} from "@angular/core";
import {GroupKey} from "../../../services/posts/posts.service";

describe('PostGroupRadioComponent', () => {
  let component: PostGroupRadioComponent;
  let fixture: ComponentFixture<PostGroupRadioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PostGroupRadioComponent],
      imports: [MatRadioModule, MatCardModule, FormsModule]
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

  it('should render group options', () => {
    component.groupKeys = [];
    fixture.detectChanges();
    let debugButtons = fixture.debugElement.queryAll(By.css('.radio-button'));
    expect(debugButtons.length).toBe(0);
    component.groupKeys = [
      {title: 'title1', key: 'yearWeek'},
      {title: 'title2', key: 'location'}
    ];
    fixture.detectChanges();
    debugButtons = fixture.debugElement.queryAll(By.css('.radio-button'));
    expect(debugButtons.length).toBe(2);
  });

  it('should check the correct value', async () => {
    component.groupKeys = [
      {title: 'title1', key: 'yearWeek'},
      {title: 'title2', key: 'location'},
    ];
    component.selectedKey = 'location';
    fixture.detectChanges();
    const debugChecked = fixture.debugElement.query(By.css('.radio-button.mat-radio-checked'));
    expect(debugChecked).toBeTruthy();
    const checked: HTMLElement = debugChecked.nativeElement;
    expect(checked.textContent.trim()).toBe('title2');
  });

  it('should call the right method on change', async () => {
    component.groupKeys = [
      {title: 'title1', key: 'yearWeek'},
      {title: 'title2', key: 'location'},
    ];
    component.selectedKey = 'yearWeek';
    const selectGroupSpy = createSpy('selectGroup')
    component.onSelectGroupKey = selectGroupSpy;
    fixture.detectChanges();
    expect(selectGroupSpy).toHaveBeenCalledTimes(0);
    const locationRadioButton = fixture.debugElement.query(By.css('mat-radio-button[ng-reflect-value="location"] label'));
    const locationRadioButtonNative: HTMLElement = locationRadioButton.nativeElement;
    locationRadioButtonNative.click();
    fixture.detectChanges();
    expect(selectGroupSpy).toHaveBeenCalledTimes(1);
  });

  it('should emit the right value on change', () => {
    component.groupKeys = [
      {title: 'title1', key: 'yearWeek'},
      {title: 'title2', key: 'location'},
    ];
    component.selectedKey = 'yearWeek';
    const emitSpy = createSpy('emit');
    component.selectGroupKey.emit = emitSpy;
    fixture.detectChanges();
    const locationRadioButton = fixture.debugElement.query(By.css('mat-radio-button[ng-reflect-value="location"] label'));
    const locationRadioButtonNative: HTMLElement = locationRadioButton.nativeElement;
    locationRadioButtonNative.click();
    fixture.detectChanges();
    expect(emitSpy).toHaveBeenCalledWith('location');
  });
});
