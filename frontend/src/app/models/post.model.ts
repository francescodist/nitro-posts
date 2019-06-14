import * as moment from 'moment';

export class Post {
  id: number;
  location: string;
  time: string;
  author: string;
  text: string;

  constructor(post: Post) {
    this.id = post.id;
    this.location = post.location;
    this.time = post.time;
    this.author = post.author;
    this.text = post.text;
  }


  get yearWeek() {
    return this.week + '_' + this.year;
  }

  get year() {
    const time: moment.Moment = moment(parseInt(this.time) * 1000);
    return time.year();
  }

  get week() {
    const time: moment.Moment = moment(parseInt(this.time) * 1000);
    return time.week();
  }
}
