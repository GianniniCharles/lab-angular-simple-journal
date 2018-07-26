import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Injectable()
export class JournalService {

  constructor(private myHttp: Http) { } //private means ONLY things in THIS document can use it. //public means any component can

  getEntries() {
    console.log('hi');
    return this.myHttp.get('http://localhost:3000/api/journal-entries')
      .map((responseThingy) => responseThingy.json());
  }


  addNewEntry(theWholeEntryObject) {
    console.log(theWholeEntryObject);
    return this.myHttp.post('http://localhost:3000/api/journal-entries', theWholeEntryObject)
    .map((res)=>res.json());
    //anytime you do a function that returns an observable, you have to do SUBSCRIBE
  }






}
