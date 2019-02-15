import {Content} from './Content';

export class Entry {

  constructor(
    public id: string,
    public title: string,
    public date: Date,
    public content: Content
  ) { }

}
