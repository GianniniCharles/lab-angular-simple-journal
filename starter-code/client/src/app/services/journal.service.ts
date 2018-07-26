import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
@Injectable()
export class JournalService {

  constructor(private http: Http) { }

  getEntry() {
    console.log('hi');
    return this.http.get('http://localhost:3000/api/journal-entries')
      .map((res) => res.json());
  }


  createEntry(theEntry) {
    console.log('Service sees' + ' '+ theEntry.title, theEntry.content)
    return this.http.post('http://localhost:3000/api/journal-entries', {title: theEntry.title, content: theEntry.content})
    .map((res)=>{ res.json(); console.log(res)});
  }






}
