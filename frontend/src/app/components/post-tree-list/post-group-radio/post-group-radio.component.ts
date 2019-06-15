import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {GroupKey} from '../../../services/posts/posts.service';
import {MatRadioChange} from '@angular/material';

@Component({
  selector: 'app-post-group-radio',
  templateUrl: './post-group-radio.component.html',
  styleUrls: ['./post-group-radio.component.scss']
})
export class PostGroupRadioComponent implements OnInit {

  @Output() selectGroupKey = new EventEmitter<GroupKey>();

  selectedKey: GroupKey = 'yearWeek';

  groupKeys: { title: string, key: GroupKey}[] = [
    {key: 'yearWeek', title: 'Week'},
    {key: 'author', title: 'Author'},
    {key: 'location', title: 'Location'},
  ];

  constructor() {
  }

  ngOnInit() {
  }

  public onSelectGroupKey(event: MatRadioChange) {
    this.selectedKey = event.value;
    this.selectGroupKey.emit(event.value);
  }

}
